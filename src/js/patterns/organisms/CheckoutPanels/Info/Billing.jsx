import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, injectIntl } from 'react-intl'

import { convertToCountryName, convertToStateName } from './../countries'
import { ReactComponent as EditIcon } from '../../../../../icons/tailwind-icons/icon-edit.svg'

const Billing = ({ intl, address, onClick }) => {
    return (
        <>
            <div className='mb-3 flex items-center justify-between'>
                <span className='text-xs text-neutral-600 font-bold leading-tight uppercase'>
                    <FormattedMessage id={'checkout.billingInformation'} />
                </span>

                <span className='text-sm text-primary-500 leading-tight cursor-pointer flex' onClick={onClick}>
                    <FormattedMessage id={'checkout.edit'} /> <EditIcon className='inline fill-current text-sm ml-2' />
                </span>
            </div>

            <div className='text-md text-neutral-900 leading-tight'>
                <p className='font-bold'>
                    {address.firstName} {address.lastName}
                </p>
                <p>{address.streetName}</p>
                <p>{address.city}</p>
                <p>{address.postalCode}</p>
                <p>{convertToCountryName(intl, address.country)}</p>
                {address.stateOrProvince && (
                    <p>{convertToStateName(intl, address.country, address.stateOrProvince)}</p>
                )}

                {(address.phone || address.email) && <div className='my-4 h-px bg-neutral-200' />}

                <p>{address.phone}</p>
                <p>{address.email}</p>
            </div>
        </>
    )
}

Billing.propTypes = {
    intl: PropTypes.object.isRequired,
    address: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default injectIntl(Billing)
