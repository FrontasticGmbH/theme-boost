import React from 'react'
import PropTypes from 'prop-types'
import MediaImage from '@frontastic/catwalk/src/js/mediaImage'

import FullPageWidthWrapper from '../Layout/FullPageWidthWrapper'

const Hero = ({ image, aspect, isFullBleed }) => {
    const aspectClass = {
        'original': '',
        '16/9': 'pb-16/9',
        '4/3': 'pb-4/3',
        '21/9': 'pb-21/9',
    }

    const calculateAspectStyle = (aspect, img) => {
        if (aspect === 'original' && img) {
            return { paddingBottom: `${(img.media.height / img.media.width) * 100}%`}
        }
        return {}
    }

    const content = (
        <div className={`relative ${aspectClass[aspect]}`} style={{...calculateAspectStyle(aspect, image)}}>
            <MediaImage
                className={`w-${isFullBleed ? 'full' : 'auto'} absolute`}
                media={image}
            />
        </div>
    )
   
    if (isFullBleed) {
        return <FullPageWidthWrapper>{content}</FullPageWidthWrapper>
    }

    return content
}


Hero.propTypes = {
    image: PropTypes.object.isRequired,
    aspect: PropTypes.string.isRequired,
    isFullBleed: PropTypes.bool.isRequired,
}

export default Hero
