import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, injectIntl } from 'react-intl'
import app from 'frontastic-catwalk/src/js/app/app'

import Price from '../../../atoms/price'
import Select from '../../../atoms/select'
import { ReactComponent as CartBin } from '../../../../../icons/cart-bin.svg'

const Product = ({ intl, itemId, image, name, designer, count, price, discountedPrice, color, size }) => {
    const productCounter = Array.from(Array(10).keys()).map((i) => {
        return i + 1
    })

    return (
        <div className='grid grid-cols-120-1xfr grid-rows-auto-1fr sm:grid-cols-120-2xfr sm:grid-rows-1 col-gap-4 row-gap-3'>
            <div>
                <img src={image} alt='' />
            </div>

            <div>
                <div className='text-md font-bold leading-tight'>{name}</div>

                {designer && <div className='text-sm text-neutral-600 leading-tight'>{designer}</div>}

                {color && (
                    <div className='mt-3 text-sm text-neutral-600 leading-tight'>
                        <FormattedMessage id='colorProduct' /> {color}
                    </div>
                )}

                {size && (
                    <div className='text-sm text-neutral-600 leading-tight'>
                        <FormattedMessage id='sizeProduct' /> {size}
                    </div>
                )}

                <div className='mt-3 w-24'>
                    <Select
                        variant='form-select'
                        value={count}
                        values={productCounter}
                        formatLabel={(option) => {
                            return option
                        }}
                        onSelect={(i) => {
                            app.getLoader('cart').updateLineItem({
                                lineItemId: itemId,
                                count: productCounter[i],
                            })
                        }}
                    />
                </div>

                <div className='mt-3'>
                    <Price
                        variant='text-sm text-neutral-700 font-bold leading-tight'
                        value={discountedPrice || price}
                    />
                </div>
            </div>

            <div>
                <button
                    className='flex sm:flex-row-reverse sm:ml-auto items-center justify-center focus:outline-none'
                    aria-label={intl.formatMessage({ id: 'cart.remove' })}
                    onClick={() => {
                        app.getLoader('cart').removeLineItem({ lineItemId: itemId })
                    }}
                >
                    <CartBin className='inline-block mx-1' />

                    <div className='mx-1 text-sm text-neutral-900 leading-tight'>
                        <FormattedMessage id='cart.remove' />
                    </div>
                </button>
            </div>
        </div>
    )
}

Product.propTypes = {
    intl: PropTypes.object.isRequired,
    itemId: PropTypes.string.isRequired,
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    designer: PropTypes.string,
    price: PropTypes.number.isRequired,
    discountedPrice: PropTypes.number,
    count: PropTypes.number.isRequired,
    color: PropTypes.string,
    size: PropTypes.string,
}

export default injectIntl(Product)
