import React, { useState } from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'

import app from 'frontastic-catwalk/src/js/app/app'
import PropTypes from "prop-types";

const Discount = ({ intl }) => {
    const buttonLabel = intl.formatMessage({ id: 'checkout.discount.apply' })
    const discountPlaceholder = intl.formatMessage({ id: 'cart.discountPlaceholder' })

    const [discountCode, setDiscountCode] = useState('')

    const redeemDiscount = () => {
        if (discountCode) {
            app.getLoader('cart')
                .redeemDiscount(discountCode)
                .then(() => {
                    setDiscountCode('')
                })
        }
    }

    return (
        <>
            <div className='text-md text-neutral-900 leading-none font-bold'>
                <FormattedMessage id={'checkout.discount.message'} />
            </div>
            <input
                type='text'
                className='form-input my-3'
                placeholder={discountPlaceholder}
                onChange={(e) => setDiscountCode(e.target.value)}
                value={discountCode}
            />
            <button
                name={buttonLabel}
                className='btn-outline btn-outline-black outline-none focus:outline-none flex ml-auto h-10'
                onClick={redeemDiscount}
                >
                {buttonLabel}
            </button>
        </>
    )
}

Discount.propTypes = {
    intl: PropTypes.object.isRequired,
}

export default injectIntl(Discount)
