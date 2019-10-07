import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import app from './app/app'
import IntlProvider from './app/intlProvider'
import store from './app/store'
import Context from './app/context'

import Preview from './preview'
import Node from './node'

export default (mountNode, dataNode, tastics = null) => {
    if (!mountNode || !dataNode) {
        return
    }

    window.onerror = (message, url, line, column = null, error = null) => {
        try {
            fetch(
                '/_recordFrontendError',
                {
                    method: 'POST',
                    headers: new Headers({
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }),
                    body: JSON.stringify({
                        message,
                        url,
                        line,
                        stack: error && error.stack,
                    }),
                    credentials: 'same-origin',
                    cache: 'default',
                }
            )
        } catch (e) {
            // Ignore errors during recording errors
        }
    }

    window.tastics = tastics

    let appData = dataNode.getAttribute('data-app')
    if (appData) {
        let data = JSON.parse(appData)
        store.dispatch({
            type: 'ApiBundle.Api.context.success',
            data: data,
        })

        let context = new Context(data)

        app.getRouter().setContext(context)
        app.getRouter().setRoutes(context.routes)

        app.loadForLocation(window.location)
    } else {
        app.getLoader('context').refresh()
    }

    if (typeof window !== 'undefined') {
        import('history').then(({ createBrowserHistory }) => {
            const history = createBrowserHistory()
            history.listen(app.loadForLocation)

            app.history = history
            app.router.history = history

            ReactDOM.hydrate(
                <Provider store={app.getStore()}>
                    <IntlProvider>
                        <Router history={app.history}>
                            <Switch>
                                <Route
                                    exact
                                    path={app.getRouter().reactRoute('Frontastic.Frontend.Preview.view')}
                                    component={Preview}
                                />

                                <Route component={Node} />
                            </Switch>
                        </Router>
                    </IntlProvider>
                </Provider>,
                mountNode
            )
        })
    } else {
        ReactDOM.hydrate(
            <Provider store={app.getStore()}>
                <IntlProvider>
                    <Router history={app.history}>
                        <Switch>
                            <Route
                                exact
                                path={app.getRouter().reactRoute('Frontastic.Frontend.Preview.view')}
                                component={Preview}
                            />

                            <Route component={Node} />
                        </Switch>
                    </Router>
                </IntlProvider>
            </Provider>,
            mountNode
        )
    }
}
