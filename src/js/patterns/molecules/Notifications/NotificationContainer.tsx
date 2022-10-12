import React from 'react'
import { Slide, toast, ToastContainer } from 'react-toastify'

const NotificationContainer: React.FunctionComponent = ({ children }) => {
    return (
        <>
            {children}
            <ToastContainer
                position={toast.POSITION.BOTTOM_CENTER}
                autoClose={30000000}
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
