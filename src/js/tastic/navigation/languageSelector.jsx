import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'

import app from '../../app/app'

class LanguageSelector extends Component {
    render () {
        if (this.props.context.project.languages.length <= 1) {
            return null
        }

        return (<Fragment>
            <select
                className='c-button'
                value={this.props.context.locale}
                onChange={(event) => {
                    app.getLoader('context').refresh(_.extend(
                        {},
                        this.props.context.toParameters(),
                        { locale: event.target.value }
                    ))
                }}>
                {_.map(this.props.context.project.languages, (language) => {
                    return <option value={language} key={language}>{language}</option>
                })}
            </select>
        </Fragment>)
    }
}

LanguageSelector.propTypes = {
    context: PropTypes.object.isRequired,
}

LanguageSelector.defaultProps = {}

export default connect(
    (globalState, props) => {
        return {
            context: globalState.app.context,
        }
    }
)(LanguageSelector)
