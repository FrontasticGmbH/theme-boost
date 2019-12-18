import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Image from '@frontastic/catwalk/src/js/image'
import ComponentInjector from '@frontastic/catwalk/src/js/app/injector'
import Translatable from '@frontastic/catwalk/src/js/component/translatable'
import './promobox-with-positioning.scss'

class OrganismsPromoboxWithPositioning extends Component {
    render () {
        const { children, vertical, horizontal, height, image, customChildrenStyle } = this.props

        let style = {}
        if (typeof height !== 'undefined') {
            style = { ...style, height }
        }

        if (!image || !image.media) {
            return null
        }

        var showRibbon = false
        if (vertical === 'top') {
            showRibbon = true
        }

        return (
            <div className='c-promobox t-spotlight u-aspect-ratio-16x9' style={style}>
                <Image
                    media={image.media}
                    alt={<Translatable value={image.media.title} />}
                    className='c-promobox__backdrop tns-lazy' />
                <div className={`c-promobox__overlay c-promobox__overlay--${vertical}-${horizontal}`}>
                    {showRibbon && (
                        <div className='ribbonTopRight ribbon'>
                            <span>BETA</span>
                        </div>
                    )}
                    <div className={`c-promobox__overlay__inner`}>
                        <div style={customChildrenStyle}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

OrganismsPromoboxWithPositioning.defaultProps = {
    vertical: 'middle',
    horizontal: 'center',
    customChildrenStyle: {},
}

OrganismsPromoboxWithPositioning.propTypes = {
    children: PropTypes.node.isRequired,
    vertical: PropTypes.string,
    horizontal: PropTypes.string,
    height: PropTypes.string,
    image: PropTypes.object.isRequired,
    customChildrenStyle: PropTypes.object,
}

export default ComponentInjector.return('OrganismsPromoboxWithPositioning', OrganismsPromoboxWithPositioning)
