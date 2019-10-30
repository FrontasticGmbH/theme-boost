import React from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import OrganismsHeaderSlideIn from 'js/patterns/organisms/base/header-slide-in'

const OrganismsGuideSorting = ({ sortItems }) => {
    return (
        <div>
            <div className='o-television is-active'>
                <OrganismsHeaderSlideIn title='Neuheiten' />
                <div className='o-television__display'>

                    <ul className='o-list-bare'>
                        {sortItems.map((item, i) => {
                        return <li className='o-list-bare__item'>
                            <div className='o-flex o-flex--justified o-flex--center c-link c-link--uniform'>
                                <button>
                                    {item}
                                </button>
                                <svg className='c-icon c-icon--s u-hidden' version='1.1' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                                    <title>Checkmark</title>
                                    <path d='M20.7 5.3c-0.4-0.4-1-0.4-1.4 0l-10.3 10.3-4.3-4.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5 5c0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l11-11c0.4-0.4 0.4-1 0-1.4z' />
                                </svg>
                            </div>
                        </li>
                      })}
                    </ul>
                </div>
                <div className='o-television__remote-control'>
                    <button type='submit' className='c-button c-button--quiet c-button--boss'>Zurück</button>
                </div>
            </div>
        </div>
    )
}

OrganismsGuideSorting.propTypes = {
    sortItems: PropTypes.array.isRequired,
}

OrganismsGuideSorting.defaultProps = {
    sortItems: ['Diese Woche', 'Letzte Woche', 'Diesen Monat', 'Letzten Monat', 'Letztes Jahr'],
}

export default ComponentInjector.return('OrganismsGuideSorting', OrganismsGuideSorting)