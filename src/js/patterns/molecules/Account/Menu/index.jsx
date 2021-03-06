import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { FormattedMessage } from 'react-intl'

import MenuItem from './MenuItem'
import MENU_ITEMS from './MENU_ITEMS'

import { ReactComponent as CartIcon } from '../../../../../icons/tailwind-icons/icon-cart.svg'
import { ReactComponent as RightIcon } from '../../../../../icons/tailwind-icons/icon-chevron-right.svg'
import { ReactComponent as HomeIcon } from '../../../../../icons/tailwind-icons/icon-home.svg'
import { ReactComponent as UserIcon } from '../../../../../icons/tailwind-icons/icon-user.svg'
import useSlidePanel from '../../Layout/Breakpoints/useSlidePanel'

import app from '@frontastic/catwalk/src/js/app/app'

const AccountMenu = ({ selectedMenuItem, welcome, children, handleLogout, openPanel }) => {
    const { usePanel } = useSlidePanel()

    return (
        <div className='m-auto md:grid grid-cols-2 grid-rows-1 grid-cols-1fr-2fr md:w-11/12 md:mt-4 text-neutral-900'>
            <div className='md:hidden'>{welcome}</div>

            <div className='flex-auto md:shadow-lg'>
                <MenuItem
                    onClick={() => {
                        selectedMenuItem !== MENU_ITEMS.ORDERS &&
                            app.getRouter().push('Frontastic.Frontend.Master.Account.orders')
                        usePanel && openPanel()
                    }}
                    selected={selectedMenuItem === MENU_ITEMS.ORDERS}
                >
                    <div className='flex'>
                        <CartIcon
                            className={classnames({
                                'mr-2 text-2xl': true,
                                'text-neutral-900': selectedMenuItem === MENU_ITEMS.ORDERS,
                            })}
                        />
                        <FormattedMessage id='account.placedOrders' />
                    </div>
                    <RightIcon className='md:hidden' />
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        selectedMenuItem !== MENU_ITEMS.ADDRESSES &&
                            app.getRouter().push('Frontastic.Frontend.Master.Account.addresses')
                        usePanel && openPanel()
                    }}
                    selected={selectedMenuItem === MENU_ITEMS.ADDRESSES}
                >
                    <div className='flex'>
                        <HomeIcon
                            className={classnames({
                                'mr-2 text-2xl fill-current': true,
                                'text-neutral-900': selectedMenuItem === MENU_ITEMS.ADDRESSES,
                            })}
                        />
                        <div>
                            <FormattedMessage id='account.addresses' />
                        </div>
                    </div>
                    <RightIcon className='md:hidden' />
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        selectedMenuItem !== MENU_ITEMS.ACCOUNT_DETAILS &&
                            app.getRouter().push('Frontastic.Frontend.Master.Account.profile')
                        usePanel && openPanel()
                    }}
                    selected={selectedMenuItem === MENU_ITEMS.ACCOUNT_DETAILS}
                >
                    <div className='flex'>
                        <UserIcon
                            className={classnames({
                                'mr-2 text-2xl': true,
                                'text-neutral-900': selectedMenuItem === MENU_ITEMS.ACCOUNT_DETAILS,
                            })}
                        />
                        <div>
                            <FormattedMessage id='account.accountDetails' />
                        </div>
                    </div>
                    <RightIcon className='md:hidden' />
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                    <div className='flex'>
                        <UserIcon className='mr-2 text-2xl' />
                        <FormattedMessage id='account.logout' />
                    </div>
                </MenuItem>
            </div>

            {selectedMenuItem === MENU_ITEMS.NONE && (
                <div className='hidden md:flex row-start-1 col-start-2'>{welcome}</div>
            )}

            {children}
        </div>
    )
}

AccountMenu.propTypes = {
    selectedMenuItem: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
    welcome: PropTypes.any.isRequired,
    handleLogout: PropTypes.func.isRequired,
    openPanel: PropTypes.func.isRequired,
}

export default AccountMenu
