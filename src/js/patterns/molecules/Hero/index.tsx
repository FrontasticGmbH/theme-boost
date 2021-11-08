import React from 'react'
import MediaImage from '@frontastic/catwalk/src/js/mediaImage'

import FullPageWidthWrapper from '../Layout/FullPageWidthWrapper'

const Hero = ({ image, aspect, isFullWidth }) => {
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

    const content = () => (
        <div className={`relative ${aspectClass[aspect]}`} style={{...calculateAspectStyle(aspect, image)}}>
            <MediaImage
                className={`w-${isFullWidth ? 'full' : 'auto'} flex-1 bg-no-repeat bg-contain bg-center mt-6`}
                media={image}
            />
        </div>
    )
   
    if (isFullWidth) {
        return <FullPageWidthWrapper>{content}</FullPageWidthWrapper>
    }

    return content
}

export default Hero
