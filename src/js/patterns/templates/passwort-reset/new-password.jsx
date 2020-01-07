import React, { Component } from 'react'

import FormPasswortReset from '../../organisms/form/password-reset'
import Button from '../../atoms/buttons/button'
import HeaderMobile from '../../organisms/base/header-mobile'
import PageHeader from '../../organisms/base/header-page'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class NewPassword extends Component {
    render () {
        return (
            <div className='o-television'>
                <HeaderMobile className='o-television__bar' />
                <div className='o-television__display'>
                    <div className='o-container-small'>
                        <div>
                            <PageHeader title='Neues Passwort' />
                            <p className='u-text-s t-text-quiet'>Bitte gib ein neues Passwort ein, damit du wieder Zugang zu deinem Benutzerkonto erhältst.</p>
                        </div>
                        <FormPasswortReset />
                    </div>
                </div>
                <div className='o-television__remote-control o-container-small'>
                    <Button type='primary' size='boss'>Neues Passwort anfordern</Button>
                </div>
            </div>
        )
    }
}

NewPassword.propTypes = {
}

NewPassword.defaultProps = {
}

export default ComponentInjector.return('NewPassword', NewPassword)
