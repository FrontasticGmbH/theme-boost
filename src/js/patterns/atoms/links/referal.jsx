import React, { Component, Fragment } from 'react'

class MoleculesReferal extends Component {
    render () {
        return (
            <Fragment>
                <a href='' title='' className='c-referal'>
                    <h3 className='c-title-level-4 c-referal__body u-text-normal'>Titel</h3>
                    <svg className='c-icon c-icon--s c-referal__icon t-text-quiet' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M15.7 11.3l-6-6c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5.3 5.3-5.3 5.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l6-6c0.4-0.4 0.4-1 0-1.4z' />
                    </svg>
                </a>
            </Fragment>
        )
    }
}

MoleculesReferal.propTypes = {}

MoleculesReferal.defaultProps = {}

export default MoleculesReferal