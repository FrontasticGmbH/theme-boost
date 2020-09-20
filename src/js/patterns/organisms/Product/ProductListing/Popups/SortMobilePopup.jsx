import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import Popup from 'reactjs-popup'
import { FormattedMessage } from 'react-intl'

import sortValues from './SortValues'
import FacetService from './../FacetService'

import { ReactComponent as IconCheck } from 'Icons/check.svg'
import { ReactComponent as IconChevronUp } from 'Icons/tailwind-icons/icon-chevron-up.svg'
import { ReactComponent as IconChevronDown } from 'Icons/tailwind-icons/icon-cheveron-down.svg'

const SortMobilePopup = ({ sortState, onChange }) => {
    const isSortEqual = (a, b) => {
        return FacetService.isSortEqual(a, b)
    }

    const onSortChange = (newSort, closeCallback) => {
        closeCallback()

        onChange(newSort)
    }
    
    return (
        <Popup
            trigger={open => (
                <div className='w-1/2 h-10 cursor-pointer select-none flex items-center justify-center border-r'>
                    <span className='text-sm text-gray-900'>
                        <FormattedMessage id='filters.sort' />
                    </span>
                    {open ? <IconChevronUp className='ml-2 inline-block' /> : <IconChevronDown className='ml-2 inline-block' /> }
                </div>
            )}
            arrow={false}
            position='bottom left'
            contentStyle={{ padding: "12px", border: "none", marginTop: "5px", width: "200px" }}
        >
            {close => (
                <div className='flex flex-col'>
                    {sortValues.map((sort, index) => {
                        return (
                            <div
                                key={index}
                                className={classnames({
                                    'my-2 flex items-center text-sm text-gray-900 leading-normal': true,
                                    'ml-2': isSortEqual(sort.value, sortState),
                                    'ml-8': !isSortEqual(sort.value, sortState)
                                })}
                                onClick={() => { onSortChange(sort.value, close) }} 
                            >
                                {isSortEqual(sort.value, sortState) && <IconCheck className='mr-2 inline-block fill-current' /> }
                                {sort.name}
                            </div>
                        )
                    })}
                </div>
            )}
        </Popup>
    )
}

SortMobilePopup.propTypes = {
    sortState: PropTypes.object.isRequired,
    onChange: PropTypes.func,
}

export default SortMobilePopup