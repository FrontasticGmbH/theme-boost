import React from 'react'

import Hero from '../../../patterns/molecules/Hero'
import tastify from '@frontastic/catwalk/src/js/helper/tastify'

export const HeroTastic = ({ data }) => {
    return <Hero {...data} />
}

export default tastify({ translate: true })(HeroTastic)