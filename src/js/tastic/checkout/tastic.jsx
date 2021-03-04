import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import tastify from '@frontastic/catwalk/src/js/helper/tastify'
import app from '@frontastic/catwalk/src/js/app/app'
import Entity from '@frontastic/catwalk/src/js/app/entity'

import DefaultLoader from 'Molecules/Loaders/DefaultLoader/index'
import CheckoutPanels from 'Molecules/Layout/CheckoutPanels'

import EmptyState, { icons } from 'Organisms/EmptyState'
import { injectIntl, intlShape } from 'react-intl'

const CheckoutTastic = ({ intl, cart, context, data }) => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        app.getLoader('cart').getShippingMethods().then(response => {
            let c = []

            /* eslint-disable no-unused-expressions */
            response.shippingMethods?.forEach(method => {
                /* eslint-disable no-unused-expressions */
                method.rates?.forEach(rate => {
                    /* eslint-disable no-unused-expressions */
                    rate.locations?.forEach(location => {
                        if (!c.includes(location.country)) {
                            c.push(location.country)
                        }
                    })
                })
            })

            setCountries(c)
        })
    }, [context.locale])

    if (!cart || countries.length === 0) {
        return <DefaultLoader />
    }

    if (cart && cart.loaded && cart.data && cart.data.lineItems.length === 0) {
        const title = intl.formatMessage({ id: 'cart.emptyCart.text' })
        const actionLabel = intl.formatMessage({ id: 'checkout.backToShop' })

        return (
            <EmptyState
                icon={icons.EMOTION_SAD}
                iconColor='text-neutral-900'
                title={title}
                action={(e) => {
                    e.preventDefault()
                    app.getRouter().history.replace('/')
                }}
                actionLabel={actionLabel}
            />
        )
    }

    if (cart && cart.loaded && cart.data && cart.data.lineItems && cart.data.lineItems.length > 0) {
        const anyProductOutOfStock = cart.data.lineItems.some(product => product.variant.isOnStock === false)

        if (anyProductOutOfStock) {
            const title = intl.formatMessage({ id: 'checkout.outOfStock' })
            const actionLabel = intl.formatMessage({ id: 'checkout.backToCart' })

            return (
                <EmptyState
                    icon={icons.EMOTION_SAD}
                    iconColor='text-neutral-900'
                    title={title}
                    action={(e) => {
                        e.preventDefault()
                        app.getRouter().push('Frontastic.Frontend.Master.Checkout.cart')
                    }}
                    actionLabel={actionLabel}
                />
            )
        }
    }

    if (cart.loading) {
        if (!cart.data || !(countries.length > 0)) {
            return <DefaultLoader />
        } else {
            return (
                <CheckoutPanels
                    isLoading
                    app={app}
                    cart={cart}
                    data={cart.data}
                    countries={countries}
                    policy={data.policy}
                />
            )
        }
    }

    return (
        <CheckoutPanels
            app={app}
            cart={cart}
            data={cart.data}
            countries={countries}
            policy={data.policy}
        />
    )
}

CheckoutTastic.propTypes = {
    intl: intlShape.isRequired,
    cart: PropTypes.instanceOf(Entity),
    context: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
}

export default injectIntl(tastify({ translate: true, connect: { cart: true, context: true } })(CheckoutTastic))
