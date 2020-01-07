import React, { Component } from 'react'

import CreditCardVisual from '../blocks/creditcard'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class CreditCard extends Component {
    render () {
        return (<div>
            <form method=''>
                <CreditCardVisual />
                <fieldset>
                    <div className='o-form-area o-distance-m'>
                        <div className='o-form-area__column-6-6 o-form-area__new-row'>
                            <label htmlFor='inp-creditcard-number' className='c-form-label'>Kreditkartennummer</label>
                            <input type='text' className='o-distance-xs' id='inp-creditcard-number' />
                        </div>
                        <div className='o-form-area__column-6-6 o-form-area__new-row'>
                            <label htmlFor='inp-creditcard-owner' className='c-form-label'>Karteninhaber</label>
                            <input type='text' className='o-distance-xs' id='inp-creditcard-owner' />
                        </div>
                        <div className='o-form-area__column-4-6'>
                            <label htmlFor='' className='c-form-label'>Ablaufdatum</label>
                            <input type='text' className='o-distance-xs' />
                        </div>
                        <div className='o-form-area__column-2-6'>
                            <label htmlFor='' className='c-form-label'>CVC</label>
                            <input type='text' className='o-distance-xs' />
                        </div>
                    </div>
                </fieldset>
                <div className='o-distance-l'>
                    <button type='submit' className='c-button c-button--primary c-button--boss'>Speichern</button>
                </div>
            </form>
        </div>)
    }
}

CreditCard.propTypes = {
}

CreditCard.defaultProps = {
}

export default ComponentInjector.return('CreditCard', CreditCard)