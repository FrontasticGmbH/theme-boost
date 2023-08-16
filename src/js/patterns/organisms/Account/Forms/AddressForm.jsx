import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { FormattedMessage, injectIntl } from 'react-intl'
import { useForm } from 'react-hook-form'

import ErrorMessage from '../../../atoms/errorMessage'
import ButtonWithLoader from '../../../atoms/button/WithLoader'

const AddressForm = ({ intl, countries, defaultValues = {}, onSubmit, showLoader }) => {
    const requiredField = intl.formatMessage({ id: 'validation.required' })

    const { register, getValues, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange',
        defaultValues: defaultValues || {},
    })

    const onFormSubmit = () => {
        onSubmit(getValues())
    }

    return (
        <form className='w-11/12 m-auto mt-2' onSubmit={handleSubmit(onFormSubmit)}>
            <input type='hidden' {...register('addressId')} />

            <div className='mb-4'>
                <label className='text-sm text-neutral-700 leading-tight' htmlFor='address-firstName'>
                    <FormattedMessage id={'checkout.form.firstName'} /> *
                </label>
                <input
                    id='address-firstName'
                    {...register('firstName', { required: requiredField })}
                    type='text'
                    className={classnames({
                        'form-input mt-2': true,
                        'border border-red-600': errors.firstName,
                    })} />
                <ErrorMessage errors={errors} name='firstName' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-neutral-700 leading-tight' htmlFor='address-lastName'>
                    <FormattedMessage id={'checkout.form.lastName'} /> *
                </label>
                <input
                    id='address-lastName'
                    {...register('lastName', { required: requiredField })}
                    type='text'
                    className={classnames({
                        'form-input mt-2': true,
                        'border border-red-600': errors.lastName,
                    })} />
                <ErrorMessage errors={errors} name='lastName' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-neutral-700 leading-tight' htmlFor='address-country'>
                    <FormattedMessage id={'checkout.form.country'} /> *
                </label>
                <select
                    id='address-country'
                    {...register('country', { required: requiredField })}
                    className={classnames({
                        'form-input mt-2 bg-background-primary': true,
                        'border border-red-600': errors.country,
                    })}>
                    {countries.map((country) => {
                        return (
                            <option key={country.code} value={country.code}>
                                {country.name}
                            </option>
                        )
                    })}
                </select>

                <ErrorMessage errors={errors} name='country' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-neutral-700 leading-tight' htmlFor='address-streetName'>
                    <FormattedMessage id={'checkout.form.address'} /> *
                </label>
                <input
                    id='address-streetName'
                    {...register('streetName', { required: requiredField })}
                    className={classnames({
                        'form-input mt-2': true,
                        'border border-red-600': errors.streetName,
                    })} />
                <ErrorMessage errors={errors} name='streetName' />

                <input
                    id='address-streetNumber'
                    {...register('streetNumber', { required: requiredField })}
                    className={classnames({
                        'form-input mt-2': true,
                        'border border-red-600': errors.streetNumber,
                    })} />
                <ErrorMessage errors={errors} name='streetNumber' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-neutral-700 leading-tight' htmlFor='address-city'>
                    <FormattedMessage id={'checkout.form.city'} /> *
                </label>
                <input
                    id='address-city'
                    {...register('city', { required: requiredField })}
                    className={classnames({
                        'form-input mt-2': true,
                        'border border-red-600': errors.city,
                    })} />
                <ErrorMessage errors={errors} name='city' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-neutral-700 leading-tight' htmlFor='address-postalCode'>
                    <FormattedMessage id={'checkout.form.zipCode'} /> *
                </label>
                <input
                    id='address-postalCode'
                    {...register('postalCode', { required: requiredField })}
                    className={classnames({
                        'form-input mt-2': true,
                        'border border-red-600': errors.postalCode,
                    })} />
                <ErrorMessage errors={errors} name='postalCode' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-neutral-700 leading-tight' htmlFor='address-phone'>
                    <FormattedMessage id={'checkout.form.phone'} />
                </label>
                <input
                    id='address-phone'
                    {...register('phone')}
                    className='form-input mt-2'
                    type='text' />
            </div>

            <div className='mb-2 bg-neutral-200 px-4 py-4 flex items-center rounded'>
                <input
                    id='shipping-default'
                    type='checkbox'
                    className='mr-2'
                    {...register('isDefaultShippingAddress')} />

                <label className='text-sm text-neutral-900 leading-tight' htmlFor='shipping-default'>
                    <FormattedMessage id='account.address.standardShipping' />
                </label>
            </div>

            <div className='bg-neutral-200 px-4 py-4 flex items-center rounded'>
                <input
                    id='billing-default'
                    type='checkbox'
                    className='mr-2'
                    {...register('isDefaultBillingAddress')} />

                <label className='text-sm text-neutral-900 leading-tight' htmlFor='billing-default'>
                    <FormattedMessage id='account.address.standardBilling' />
                </label>
            </div>

            <div className='text-center mt-6'>
                <ButtonWithLoader
                    name={intl.formatMessage({ id: 'account.save' })}
                    showLoader={showLoader}
                    type='submit'
                    variant='btn btn-primary w-full'
                >
                    <FormattedMessage id='account.save' />
                </ButtonWithLoader>
            </div>
        </form>
    )
}

AddressForm.propTypes = {
    intl: PropTypes.object.isRequired,
    countries: PropTypes.array.isRequired,
    defaultValues: PropTypes.object,
    onSubmit: PropTypes.func.isRequired,
    showLoader: PropTypes.bool.isRequired,
}

export default injectIntl(AddressForm)
