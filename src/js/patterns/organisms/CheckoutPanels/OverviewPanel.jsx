import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { injectIntl } from 'react-intl'

import DiscountForm from './Forms/Discount'
import ShippingMethodForm from './Forms/ShippingMethod'

import Shipping from './Info/Shipping'
import Billing from './Info/Billing'
import Products from './Info/Products'
import OrderButton from './Info/OrderButton'

import Summary from '../Cart/FullCart/Summary'
import StickyRightColumn from '../../molecules/Layout/StickyRightColumn'

const OverviewPanel = ({ app, intl, data, countries, goToNextPanel, goToPanelIndex, policy, isLoading = false }) => {
    const buttonLabel = intl.formatMessage({ id: 'checkout.nextPayment' })

    const [shippingMethod, setShippingMethod] = useState(data.shippingMethod ? data.shippingMethod : null)

    const isValid = () => {
        return shippingMethod
    }

    const onChangeShippingMethod = (data) => {
        setShippingMethod(data)

        app.getLoader('cart').updateCart({
            shippingMethodName: data.shippingMethodId,
        })
    }

    const onNextClicked = () => {
        if (shippingMethod) {
            app.getLoader('cart')
                .updateCart({
                    shippingMethodName: shippingMethod.shippingMethodId,
                })
                .then(() => {
                    goToNextPanel()
                })
        }
    }

    return (
        <StickyRightColumn
            variant='md:my-4 md:px-4 max-w-960px mx-auto'
            leftColumn={
                <div className='md:shadow-md md:rounded bg-white'>
                    <div className='sm:hidden px-4 py-3 md:px-6 border-b-4 border-neutral-100 border-t-4 md:border-t-0'>
                        <OrderButton
                            label={buttonLabel}
                            vouchersLabel={policy}
                            disabled={!isValid()}
                            onClick={onNextClicked}
                        />
                    </div>

                    <div className='px-4 py-5 md:px-6 border-b-4 border-neutral-100'>
                        <ShippingMethodForm
                            shippingMethod={data.shippingMethod}
                            onSubmit={(data) => {
                                onChangeShippingMethod(data)
                            }}
                        />
                    </div>

                    <div className='px-4 py-5 md:px-6 border-b-4 border-neutral-100'>
                        <Products products={data.lineItems} />
                    </div>

                    <div className='px-4 py-5 md:px-6 border-b-4 border-neutral-100'>
                        {data.shippingAddress && (
                            <Shipping
                                address={data.shippingAddress}
                                countries={countries}
                                onClick={() => {
                                    goToPanelIndex(0)
                                }}
                            />
                        )}
                    </div>

                    <div className='px-4 py-5 md:px-6 border-b-4 border-neutral-100'>
                        {data.billingAddress && (
                            <Billing
                                address={data.billingAddress}
                                countries={countries}
                                onClick={() => {
                                    goToPanelIndex(0)
                                }}
                            />
                        )}
                    </div>
                </div>
            }
            rightColumn={
                <>
                    <div className='mb-1 md:mb-4 px-4 py-6 md:py-4 md:shadow-md md:rounded border-t-4 md:border-t-0 border-neutral-100 bg-white'>
                        <DiscountForm />
                    </div>

                    <div className='px-4 py-6 md:py-4 md:shadow-md md:rounded border-t-4 md:border-t-0 border-neutral-100 bg-white'>
                        <Summary
                            buttonLabel={buttonLabel}
                            vouchersLabel={policy}
                            disabled={!isValid()}
                            onClick={onNextClicked}
                        />
                    </div>
                </>
            }
        />
    )
}

OverviewPanel.propTypes = {
    app: PropTypes.object.isRequired,
    intl: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    countries: PropTypes.array.isRequired,
    goToNextPanel: PropTypes.func.isRequired,
    goToPanelIndex: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    policy: PropTypes.string,
}

export default injectIntl(OverviewPanel)
