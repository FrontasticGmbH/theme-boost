import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { FormattedMessage, injectIntl, IntlShape } from 'react-intl'

import Button from '../../../atoms/button'
import ButtonWithLoader from '../../../atoms/button/WithLoader'
import ErrorMessage from '../../../atoms/errorMessage'

const Login = ({ intl, showRegisterForm, showForgottenPasswordForm, handleLogin, showLoader }) => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const validEmail = intl.formatMessage({ id: 'validation.email' })
    const requiredField = intl.formatMessage({ id: 'validation.required' })

    const onSubmit = ({ email, password }) => {
        handleLogin(email, password)
    }

    return (
        <div className='flex flex-col items-center'>
            <div className='mt-0 md:mt-8 flex flex-col items-center bg-background-primary w-full md:w-160'>
                <div className='px-4 my-8 w-full sm:w-100'>
                    <div className='mb-8 text-2xl sm:text-3xl text-center font-bold leading-none'>
                        <FormattedMessage id='account.login.login' />
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='mb-4'>
                            <label className='text-sm text-neutral-700 leading-tight' htmlFor='login-email'>
                                <FormattedMessage id='account.form.emailLabel' />
                            </label>
                            <input
                                id='login-email'
                                {...register('email', {
                                    required: requiredField,
                                    pattern: {
                                        // TODO - please double check if this regex is ok
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i,
                                        message: validEmail,
                                    },
                                })}
                                type='text'
                                className='form-input mt-2' />
                            <ErrorMessage errors={errors} name='email' />
                        </div>

                        <div className='mb-5'>
                            <label className='text-sm text-neutral-700 leading-tight' htmlFor='login-password'>
                                <FormattedMessage id='account.form.passwordLabel' />
                            </label>
                            <input
                                id='login-password'
                                {...register('password', { required: requiredField })}
                                type='password'
                                className='form-input mt-2' />
                            <ErrorMessage errors={errors} name='password' />
                        </div>

                        <ButtonWithLoader
                            name={intl.formatMessage({ id: 'account.login.login' })}
                            showLoader={showLoader}
                            type='submit'
                            variant='btn btn-primary w-full h-10'
                        >
                            <FormattedMessage id='account.login.login' />
                        </ButtonWithLoader>

                        <div
                            className='cursor-pointer mt-4 text-sm text-center text-neutral-900 leading-tight'
                            onClick={showForgottenPasswordForm}
                        >
                            <FormattedMessage id='account.login.forgotPassword' />
                        </div>
                    </form>
                </div>

                <div className='-mx-4 w-full h-1 bg-neutral-100 md:none' />

                <div className='px-4 my-5 w-full md:w-100 text-center'>
                    <div className='mb-5 text-lg text-center text-neutral-600 font-bold'>
                        <FormattedMessage id='account.login.newToCalwalk' />
                    </div>

                    <Button
                        name={intl.formatMessage({ id: 'account.register.createAccount' })}
                        variant='btn-outline btn-outline-black w-64 h-10'
                        onClick={showRegisterForm}
                    >
                        <FormattedMessage id='account.register.createAccount' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

Login.propTypes = {
    intl: PropTypes.object.isRequired,
    showRegisterForm: PropTypes.func.isRequired,
    showForgottenPasswordForm: PropTypes.func.isRequired,
    handleLogin: PropTypes.func.isRequired,
    showLoader: PropTypes.bool.isRequired,
}

export default injectIntl(Login)
