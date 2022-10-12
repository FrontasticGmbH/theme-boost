import ComponentInjector from '@frontastic/catwalk/src/js/app/injector'

import Notification from './patterns/molecules/Notifications/Default'
import NotificationContainer from './patterns/molecules/Notifications/NotificationContainer'

export default (() => {
    ComponentInjector.set('AtomsNotification', Notification)
    ComponentInjector.set('NotificationContainer', NotificationContainer)
    return null
})()
