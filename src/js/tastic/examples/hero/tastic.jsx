import React from 'react'

import Hero from '../../../patterns/molecules/Hero'
import tastify from '@frontastic/catwalk/src/js/helper/tastify'

const HeroTastic = ({ data }) => {
    return <Hero {...data} />
}

HeroTastic.propTypes = {
    image: PropTypes.object.isRequired,
    aspect: PropTypes.string.isRequired,
    isFullWidth: PropTypes.bool.isRequired,
}

export default tastify({ translate: true })(HeroTastic)
