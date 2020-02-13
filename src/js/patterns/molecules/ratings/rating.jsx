import React from 'react'
import PropTypes from 'prop-types'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import { FormattedMessage } from 'react-intl'
import { ReactComponent as StarSmallFull } from '../../../../icons/star-small-full.svg'
import { ReactComponent as StarSmallEmpty } from '../../../../icons/star-small-empty.svg'

const Rating = ({ counterMessage, className }) => {
    return (
        <div className={className}>
            <div className='c-rating'>
                {[1, 2, 3, 4, 5].map((s, i) => {
                    return i < 3 ? <StarSmallFull className='c-rating__symbol is-active' key={i} /> : <StarSmallEmpty className='c-rating__symbol' key={i} />
                })}
            </div>
            {counterMessage ?
                <div className='u-text-xs u-text-color-quiet o-distance-xxxs'>
                    <FormattedMessage id='product.reviewsWithCount' values={{ count: 7 }} />
                </div>
            : null}

        </div>
    )
}

Rating.propTypes = {
    className: PropTypes.string,
    counterMessage: PropTypes.bool,
}

Rating.defaultProps = {
    className: '',
    counterMessage: false,
}

export default ComponentInjector.return('Rating', Rating)
