import React, { useEffect } from 'react'
import { toast } from 'react-toastify'

import AlertSuccess from '../../atoms/alert/Success'
import AlertError from '../../atoms/alert/Error'

import 'react-toastify/dist/ReactToastify.css'
import './default-notification-style.scss'

interface Props {
    message: string
    type: 'success' | 'info' | 'warning' | 'error'
}

function Notification({ message, type }: Props) {
    const Alert = type === 'error' ? AlertError : AlertSuccess

    useEffect(() => {
        toast(<Alert message={message} />, {
            className: 'notification-default',
        })
    }, [])

    return <></>
}

export default Notification
