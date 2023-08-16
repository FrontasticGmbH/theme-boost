import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, injectIntl } from 'react-intl'
import { useForm } from 'react-hook-form'

import ButtonWithLoader from '../../../atoms/button/WithLoader'
import ErrorMessage from '../../../atoms/errorMessage'

const ChangePasswordForm = ({ intl, onSubmit, showLoader }) => {
    const requiredField = intl.formatMessage({ id: 'validation.required' })
    const minLength = intl.formatMessage({ id: 'validation.minLength' })
    const passwordMatch = intl.formatMessage({ id: 'validation.passwordMatch' })
    const { register, getValues, watch, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange' })

    const onNewPasswordSubmit = () => {
        const { oldPassword, newPassword } = getValues()
        onSubmit(oldPassword, newPassword)
    }

    return (
        <form onSubmit={handleSubmit(onNewPasswordSubmit)} className={`flex-col pt-6 m-auto w-3/4 md:w-11/12 md:p-0`}>
            <div className='text-sm text-neutral-600'>
                <span>
                    <FormattedMessage id='account.inOrder' />
                </span>
                <span className='font-bold'>
                    {' '}
                    <FormattedMessage id='account.protect' />{' '}
                </span>
                <span>
                    <FormattedMessage id='account.passwordContain' />
                </span>
                <ul className='list-disc m-4'>
                    <li>
                        <FormattedMessage id='account.characters' />
                    </li>
                </ul>
            </div>

            <div className='mt-6 mb-4'>
                <div className='mb-4'>
                    <label htmlFor='oldPassword' className='text-sm text-neutral-600'>
                        <FormattedMessage id='account.login.password' />
                    </label>
                    <input
                        id='old-password'
                        {...register('oldPassword', { required: requiredField })}
                        type='password'
                        className='form-input mt-2' />
                    <ErrorMessage errors={errors} name='oldPassword' />
                </div>
                <div className='mb-4'>
                    <label htmlFor='newPassword' className='text-sm text-neutral-600'>
                        <FormattedMessage id='account.password.new' />
                    </label>

                    <input
                        id='newPassword'
                        {...register('newPassword', {
                            required: requiredField,
                            minLength: {
                                value: 6,
                                message: minLength,
                            },
                        })}
                        type='password'
                        className='form-input mt-2' />

                    <ErrorMessage errors={errors} name='newPassword' />
                </div>
                <div className='mb-4'>
                    <label htmlFor='confirmNewPassword' className='text-sm text-neutral-600'>
                        <FormattedMessage id='account.password.confirmNew' />
                    </label>

                    <input
                        id='confirmNewPassword'
                        {...register('confirmNewPassword', {
                            required: requiredField,
                            validate: (value) => {
                                return value === watch('newPassword') || passwordMatch
                            },
                        })}
                        type='password'
                        className='form-input mt-2' />

                    <ErrorMessage errors={errors} name='confirmNewPassword' />
                </div>
                <div className='text-center mt-6'>
                    <ButtonWithLoader
                        name={intl.formatMessage({ id: 'account.changePassword' })}
                        showLoader={showLoader}
                        type='submit'
                        variant='btn btn-primary w-full'
                    >
                        <FormattedMessage id='account.changePassword' />
                    </ButtonWithLoader>
                </div>
            </div>
        </form>
    )
}

ChangePasswordForm.propTypes = {
    intl: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    showLoader: PropTypes.bool.isRequired,
}

export default injectIntl(ChangePasswordForm)
