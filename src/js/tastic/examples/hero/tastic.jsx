import React from 'react'
import PropTypes from 'prop-types'

import Hero from '../../../patterns/molecules/Hero'
import tastify from '@frontastic/catwalk/src/js/helper/tastify'

const HeroTastic = ({ data }) => {
    console.log('hey world')

    return <Hero {...data} />
}

HeroTastic.propTypes = {
    data: PropTypes.object.isRequired,
}

export default tastify({ translate: true })(HeroTastic)
