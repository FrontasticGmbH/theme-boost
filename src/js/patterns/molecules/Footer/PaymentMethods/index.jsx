import React from 'react'
import PropTypes from 'prop-types'

import List from '../../List'

import { ReactComponent as PayPalIcon } from '../../../../icons/paypal.svg'
import { ReactComponent as VisaIcon } from '../../../../icons/visa.svg'
import { ReactComponent as MastercardIcon } from '../../../../icons/mastercard.svg'

// icon map - should mirror the options in the tastic schema
const paymentIcons = { paypal: PayPalIcon, visa: VisaIcon, mastercard: MastercardIcon }

function paymentMethodsFromData(methods = []) {
    return methods.map((method) => {
        const Icon = paymentIcons[method.playmentIcon]

        return {
            item: <Icon className='mx-2 w-10 h-10 inline-block text-neutral-100 fill-current' />,
        }
    })
}

const PaymentMethods = ({ methods }) => {
    return <List links={paymentMethodsFromData(methods)} variant='flex -mt-2' />
}

PaymentMethods.propTypes = {
    methods: PropTypes.array,
}

export default PaymentMethods
