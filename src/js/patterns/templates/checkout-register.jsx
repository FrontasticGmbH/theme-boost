import React, { Component, Fragment } from 'react'

import MoleculesButton from 'js/patterns/molecules/buttons/button'
import OrganismsHeaderContext from 'js/patterns/organisms/base/header-context'
import OrganismsFormRegister from 'js/patterns/organisms/form/form-register'
import OrganismsPageHeader from 'js/patterns/organisms/base/header-page'
import OrganismsFooter from 'js/patterns/organisms/base/foot'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class TemplatesCheckoutRegister extends Component {
    render () {
        return (
            <Fragment>
                <div className='o-television'>
                    <OrganismsHeaderContext className='o-television__bar' />
                    <div className='o-television__display'>
                        <OrganismsFormRegister />
                        <MoleculesButton type='primary' size='boss' className='o-distance-m'>Jetzt Registrieren</MoleculesButton>
                        <div className='o-television__display__boundless'>
                            <span className='c-divider c-divider--break o-distance-m' />
                        </div>
                        <section className='o-distance-m'>
                            <h2 className='c-title-level-3 u-text-center'>Melde dich jetzt an</h2>
                            <MoleculesButton type='quiet' size='boss' className='o-distance-m'>Anmelden</MoleculesButton>
                        </section>
                        <OrganismsFooter />
                    </div>
                </div>
            </Fragment>
        )
    }
}

TemplatesCheckoutRegister.propTypes = {
}

TemplatesCheckoutRegister.defaultProps = {
}

export default ComponentInjector.return('TemplatesCheckoutRegister', TemplatesCheckoutRegister)