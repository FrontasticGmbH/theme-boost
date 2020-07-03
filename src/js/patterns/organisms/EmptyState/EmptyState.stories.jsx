import React from 'react'
import { action } from '@storybook/addon-actions'
import { FormattedMessage } from 'react-intl'

import Button from 'Atoms/button'
// TODO: import statement not conform with Airbnb. Pls fix webpack config
import EmptyState, { icons } from 'Organisms/EmptyState/index'
import { ReactComponent as IconCheckmarkCircle } from 'Icons/tailwind-icons/icon-check-circle.svg'
import { ReactComponent as IconEmotionSad } from 'Icons/tailwind-icons/icon-emotion-sad.svg'

export default {
    title: 'Empty State',
}

export const orderConfirmed = () => {
    return (
        <>
            <EmptyState
                title={<FormattedMessage id='checkout.orderConfirmed' />}
                subtitle={
                    <>
                        <FormattedMessage id='checkout.orderId' /> 123
                    </>
                }
                action={action('action click')}
                actionLabel={<FormattedMessage id='checkout.continueShopping' />}
                icon={<IconCheckmarkCircle className='w-20 h-20 inline-block text-teal-500 fill-current' />}
            >
                <FormattedMessage id='checkout.orderConfirmation' />
                <span className='font-bold ml-1'>bla@bla.com</span>
            </EmptyState>
        </>
    )
}

export const error = () => {
    return (
        <EmptyState
            icon={<IconEmotionSad className='w-20 h-20 inline-block text-gray-400 fill-current' />}
            title={<FormattedMessage id='checkout.wentWrong' />}
            subtitle={<FormattedMessage id='checkout.beenCharged' />}
            action={action('try again click')}
            actionLabel={<FormattedMessage id='checkout.tryAgain' />}
        ></EmptyState>
    )
}

export const iconAsString = () => {
    return (
        <EmptyState
            icon={icons.CHECKMARK_CIRCLE}
            iconColor='text-red-500'
            title={<FormattedMessage id='checkout.wentWrong' />}
            subtitle={<FormattedMessage id='checkout.beenCharged' />}
            action={action('try again click')}
            actionLabel={<FormattedMessage id='checkout.tryAgain' />}
        ></EmptyState>
    )
}

export const smile = () => {
    return (
        <EmptyState
            icon={icons.EMOTION_HAPPY}
            iconColor='text-yellow-500'
            title={'Everyday you should smile at least twice!'}
        ></EmptyState>
    )
}
