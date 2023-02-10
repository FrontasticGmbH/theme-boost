import React from 'react'
import { Slide, toast, ToastContainer } from 'react-toastify'

interface Props {
    children?: React.ReactNode
}

const NotificationContainer: React.FunctionComponent<Props> = ({ children }) => {
    return (
        <>
            {children}
            <ToastContainer
                position={toast.POSITION.BOTTOM_CENTER}
                autoClose={3000}
                closeButton={false}
                hideProgressBar
                newestOnTop={false}
                rtl={false}
                transition={Slide}
                pauseOnFocusLoss
                pauseOnHover
                draggable
            />
        </>
    )
}
export default NotificationContainer
