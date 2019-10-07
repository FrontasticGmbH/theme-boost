import React, { Component } from 'react'
import _ from 'lodash'

import AtomsButton from '../../../patterns/atoms/buttons/button'

import app from '../../../app/app'

class Register extends Component {
    constructor (props) {
        super(props)

        this.state = {
            register_salutation: '',
            register_firstName: '',
            register_lastName: '',
            register_email: '',
            register_phone_prefix: '+49',
            register_phone: '',
            register_birthday_day: '',
            register_birthday_month: '',
            register_birthday_year: '',
            register_password: '',
            register_tos: false,
        }
    }

    hasAllRequired = () => {
        return !!(
            this.state.register_salutation &&
            this.state.register_firstName &&
            this.state.register_lastName &&
            this.state.register_email &&
            this.state.register_birthday_day &&
            this.state.register_birthday_month &&
            this.state.register_birthday_year &&
            this.state.register_password &&
            this.state.register_tos
        )
    }

    render () {
        return (<form className='c-form'>
            <div className='c-form__item'>
                <label htmlFor='register_salutation' className='c-form__label c-form__label--required'>Anrede</label>
                <select
                    id='register_salutation'
                    className='c-form__select'
                    required
                    autoComplete='salutation'
                    value={this.state.register_salutation}
                    onChange={(event) => {
                        this.setState({ register_salutation: event.target.value })
                    }}
                >
                    <option value=''>Bitte Auswählen</option>
                    <option value='Herr'>Herr</option>
                    <option value='Frau'>Frau</option>
                </select>
            </div>
            <div className='c-form__item'>
                <label htmlFor='register_firstName' className='c-form__label c-form__label--required'>Vorname</label>
                <input
                    id='register_firstName'
                    className='c-form__input'
                    type='text'
                    required
                    autoComplete='firstName'
                    value={this.state.register_firstName}
                    onChange={(event) => {
                        this.setState({ register_firstName: event.target.value })
                    }}
                />
            </div>
            <div className='c-form__item'>
                <label htmlFor='register_lastName' className='c-form__label c-form__label--required'>Nachname</label>
                <input
                    id='register_lastName'
                    className='c-form__input'
                    type='text'
                    required
                    autoComplete='lastName'
                    value={this.state.register_lastName}
                    onChange={(event) => {
                        this.setState({ register_lastName: event.target.value })
                    }}
                />
            </div>
            <div className='c-form__item'>
                <label htmlFor='register_email' className='c-form__label c-form__label--required'>E-Mail</label>
                <input
                    id='register_email'
                    className='c-form__input'
                    type='email'
                    required
                    autoComplete='email'
                    value={this.state.register_email}
                    onChange={(event) => {
                        this.setState({ register_email: event.target.value })
                    }}
                />
            </div>
            <div className='c-form__item'>
                <label htmlFor='register_phone' className='c-form__label'>Telefon</label>
                <div className='o-layout'>
                    <div className='o-layout__item u-1/3'>
                        <select
                            id='register_phone_prefix'
                            className='c-form__select'
                            autoComplete='salutation'
                            value={this.state.register_phone_prefix}
                            onChange={(event) => {
                                this.setState({ register_phone_prefix: event.target.value })
                            }}
                        >
                            <option value=''>Bitte Auswählen</option>
                            <option value='+49'>+49</option>
                        </select>
                    </div>
                    <div className='o-layout__item u-2/3'>
                        <input
                            id='register_phone'
                            className='c-form__input'
                            type='number'
                            required
                            autoComplete='phone'
                            value={this.state.register_phone}
                            onChange={(event) => {
                                this.setState({ register_phone: event.target.value })
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className='c-form__item'>
                <label htmlFor='register_phone' className='c-form__label c-form__label--required'>Geburtstag</label>
                <div className='o-layout'>
                    <div className='o-layout__item u-1/3'>
                        <select required
                            id='register_birthday_day'
                            className='c-form__select'
                            value={this.state.register_birthday_day}
                            autoComplete='bday-day'
                            onChange={(event) => {
                                this.setState({ register_birthday_day: event.target.value })
                            }}>
                            <option value=''>Bitte Auswählen</option>
                            {_.map(_.range(1, 32), (day) => {
                                return <option key={day} value={day}>{day}</option>
                            })}
                        </select>
                    </div>
                    <div className='o-layout__item u-1/3'>
                        <select required
                            id='register_birthday_month'
                            className='c-form__select'
                            value={this.state.register_birthday_month}
                            autoComplete='bday-month'
                            onChange={(event) => {
                                this.setState({ register_birthday_month: event.target.value })
                            }}>
                            <option value=''>Bitte Auswählen</option>
                            {_.map(_.range(1, 13), (month) => {
                                return <option key={month} value={month}>{month}</option>
                            })}
                        </select>
                    </div>
                    <div className='o-layout__item u-1/3'>
                        <select required
                            id='register_birthday_year'
                            className='c-form__select'
                            value={this.state.register_birthday_year}
                            autoComplete='bday-year'
                            onChange={(event) => {
                                this.setState({ register_birthday_year: event.target.value })
                            }}>
                            <option value=''>Bitte Auswählen</option>
                            {_.map(_.range(2018, 1900), (year) => {
                                return <option key={year} value={year}>{year}</option>
                            })}
                        </select>
                    </div>
                </div>
            </div>
            <div className='c-form__item'>
                <label htmlFor='register_password' className='c-form__label c-form__label--required'>Password</label>
                <input
                    placeholder='Mindestens 8 Buchstaben/Zahlen und 1 Sonderzeichen'
                    id='register_password'
                    className='c-form__input'
                    type='password'
                    required
                    pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
                    autoComplete='password'
                    value={this.state.register_password}
                    onChange={(event) => {
                        this.setState({ register_password: event.target.value })
                    }}
                />
            </div>
            <div className='c-form__item'>
                <input
                    className='c-form__input'
                    type='checkbox'
                    id='register_tos'
                    checked={this.state.register_tos}
                    onChange={(event) => {
                        this.setState({ register_tos: event.target.checked })
                    }}
                />
                <label className='c-form__label-checkbox' htmlFor='register_tos'>
                    AGBs akzeptieren
                </label>
            </div>
            <div className='c-form__item'>
                <AtomsButton
                    type='primary' full
                    htmlType='submit'
                    disabled={!this.hasAllRequired()}
                    onClick={(event) => {
                        event.preventDefault()
                        event.stopPropagation()

                        app.getLoader('context').register({
                            salutation: this.state.register_salutation,
                            firstName: this.state.register_firstName,
                            lastName: this.state.register_lastName,
                            email: this.state.register_email,
                            phonePrefix: this.state.register_phone_prefix,
                            phone: this.state.register_phone,
                            birthdayDay: this.state.register_birthday_day,
                            birthdayMonth: this.state.register_birthday_month,
                            birthdayYear: this.state.register_birthday_year,
                            password: this.state.register_password,
                            tos: this.state.register_tos,
                        })
                    }}>
                    Registrieren
                </AtomsButton>
            </div>
        </form>)
    }
}

Register.propTypes = {
}

Register.defaultProps = {
}

export default Register
