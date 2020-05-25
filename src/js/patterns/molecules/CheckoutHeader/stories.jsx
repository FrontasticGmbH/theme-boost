import React from 'react'
import { ReactComponent as IconLockClosed } from 'Icons/tailwind-icons/icon-lock-closed.svg'

export default {
    title: 'Checkout Header',
}

export const checkoutHeader = () => {
    return (
        <div className='flex h-12 shadow-md'>
            <div
                className='self-center h-6 w-full max-w-124px ml-4'
                style={{ backgroundImage: `url("https://res.cloudinary.com/dlwdq84ig/image/upload/c_fill,f_auto,g_faces:auto,h_24,q_auto,w_124/wdl9ur94jedxlaem3c52")` }}
            />
            <div className='self-center flex w-11/12 justify-end mr-4 text-xs text-gray-800'>
                Checkout
                <IconLockClosed className='text-sm ml-1 fill-current text-gray-800' />
            </div>
        </div>
    )
}