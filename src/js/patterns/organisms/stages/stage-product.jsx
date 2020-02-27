import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import Gallery from '../galleries/gallery'
import Rating from '../../molecules/ratings/rating'
import ExpressDelivery from '../blocks/express-delivery'
import { ReactComponent as Wishlist } from './../../../../icons/wishlist-heart.svg'
import { actions, actionPosition } from './stage.module.scss'

class ProductStage extends Component {
    render () {
        const { images, name, discountedPrice, price, addToCartButton, addToWishlist } = this.props
        return (
            <div className='o-media-block o-media-block--half'>
                <div className='o-media-block__asset'>
                    <Gallery
                        imagesComponents={(images || []).map((image) => {
                            return (<img imageUrl={image} alt={name} />)
                        })}
                        addToWishlist={addToWishlist}
                    />
                </div>
                <div className='o-media-block__body'>
                    <div className='o-product__header o-product__header--centered'>
                        <h1 className='c-title-level-1 o-product__header__large-column'>{name}</h1>

                        <div className='o-product__header__offset'>
                            <span className='c-badge c-badge--danger'>Sale</span>
                        </div>
                    </div>
                    <div className='o-product__details o-distance-xs'>
                        <div className='o-product__price'>
                            <p className='u-text-color-danger'>{ discountedPrice || price }</p>
                            <span className='u-text-xs u-text-color-quiet o-product__price__info'> inkl. 19% MwSt.</span>
                        </div>
                        {
                            discountedPrice && { price }
                        }

                        <div className='o-product__details__offset'>
                            <Rating counterMessage='true' />
                        </div>
                    </div>

                    {/* <div className='filter-component'>
                        <AtomsFormLabel className='filter-input-label text-align--center' value='Größe' />
                        <VerticalSwipe sliderId='swipe-sizes'>
                            <OrganismsSizes />
                        </VerticalSwipe>
                    </div> */}

                    {/* <div className='o-flex o-flex--center o-flex--large-justified'>
                        <dl className='o-detaillist'>
                            <dt className='t-text-quiet'>Farbe:</dt>
                            <dd className='u-text-strong'>Schwarz</dd>
                        </dl>
                        <MoleculesColorsFilter className='margin-bottom--8' colors={['#31333E', '#98E076', '#3A42F1', '#FFCE18']} />
                    </div>
                    <MoleculesButton className='c-button--full-width o-distance-m' type='primary'>
                        In den Warenkorb
                    </MoleculesButton> */}

                    {/* <div className='o-block-short o-distance-l'>

                        <img src={deliveryTruck} alt='delivery' />

                        <div className='padding-left--16'>
                            <strong className='u-text-strong'>Expres Lieferung:</strong>
                            <p className='u-text-small'>
                                Bestelle in den nächsten sechs Stunden und du erhälsts deine Lieferung morgen.
                            </p>
                        </div>
                    </div> */}

                    <div className='u-hidden-until-medium'>
                        {/* Commenting out until we add data from the API */}
                        {/* <div className='o-distance-l'>
                            <p className='c-title-level-3 u-text-normal'>Farbe: <span className='u-text-strong'>Olive</span></p>
                            <div className='o-distance-m'>
                                <div className='c-gallery-thumb-bar'>
                                    <div className='c-gallery-thumb-bar__item is-active'>
                                        <img src='https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073319_1_medium.jpg' alt='' />
                                    </div>
                                    <div className='c-gallery-thumb-bar__item'>
                                        <img src='https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073319_1_medium.jpg' alt='' />
                                    </div>
                                    <div className='c-gallery-thumb-bar__item'>
                                        <img src='https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073319_1_medium.jpg' alt='' />
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className={actions}>
                            {/* Commenting out until we add data from the API */}
                            {/* <select name='size' id='' className='u-full-width'>
                                <option value=''>Select Size</option>
                                <option value=''>36</option>
                                <option value=''>38</option>
                            </select> */}
                            <div className={actionPosition}>
                                <div className='o-buttonbar o-distance-s'>
                                    {addToCartButton}

                                    <button className='c-button c-button--quiet u-icon-line-height o-buttonbar__item'>
                                        <Wishlist className='c-icon c-icon--m' />
                                    </button>
                                </div>
                                <div className='o-distance-l'>
                                    <ExpressDelivery />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="o-flex"> */}
                {/* <div className="delivery-features">
                    <div className="c-box">
                        <div className='o-block-short o-block-short--centered t-text-uniform'>
                        <svg className="c-icon c-icon--s o-block-short__short-item" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M0.75 13.1249H14.25C14.4489 13.1249 14.6397 13.0459 14.7803 12.9052C14.921 12.7646 15 12.5738 15 12.3749V4.44591C14.9807 4.25302 14.9237 4.06581 14.832 3.895C14.7403 3.72419 14.6159 3.57312 14.4658 3.45044C14.3157 3.32775 14.1429 3.23585 13.9573 3.17999C13.7717 3.12413 13.5769 3.10542 13.384 3.12491H1.616C1.42313 3.10542 1.22832 3.12413 1.04269 3.17999C0.85706 3.23585 0.684264 3.32775 0.534179 3.45044C0.384094 3.57312 0.259664 3.72419 0.168006 3.895C0.076347 4.06581 0.019257 4.25302 0 4.44591L0 12.3749C0 12.5738 0.0790176 12.7646 0.21967 12.9052C0.360322 13.0459 0.551088 13.1249 0.75 13.1249ZM11 5.37491V10.8749C11 11.0738 10.921 11.2646 10.7803 11.4052C10.6397 11.5459 10.4489 11.6249 10.25 11.6249C10.0511 11.6249 9.86032 11.5459 9.71967 11.4052C9.57902 11.2646 9.5 11.0738 9.5 10.8749V5.37491C9.5 5.17599 9.57902 4.98523 9.71967 4.84458C9.86032 4.70392 10.0511 4.62491 10.25 4.62491C10.4489 4.62491 10.6397 4.70392 10.7803 4.84458C10.921 4.98523 11 5.17599 11 5.37491ZM5 5.37491V10.8749C5 11.0738 4.92098 11.2646 4.78033 11.4052C4.63968 11.5459 4.44891 11.6249 4.25 11.6249C4.05109 11.6249 3.86032 11.5459 3.71967 11.4052C3.57902 11.2646 3.5 11.0738 3.5 10.8749V5.37491C3.5 5.17599 3.57902 4.98523 3.71967 4.84458C3.86032 4.70392 4.05109 4.62491 4.25 4.62491C4.44891 4.62491 4.63968 4.70392 4.78033 4.84458C4.92098 4.98523 5 5.17599 5 5.37491Z" />
                                <path d="M24 10.875C24 9.81413 23.5786 8.79672 22.8284 8.04657C22.0783 7.29643 21.0609 6.875 20 6.875H17C16.7348 6.875 16.4804 6.98036 16.2929 7.16789C16.1054 7.35543 16 7.60978 16 7.875V13.875C16 13.9413 15.9737 14.0049 15.9268 14.0518C15.8799 14.0987 15.8163 14.125 15.75 14.125H0.75C0.551088 14.125 0.360322 14.204 0.21967 14.3447C0.0790176 14.4853 0 14.6761 0 14.875L0 17.875C0 18.0739 0.0790176 18.2647 0.21967 18.4053C0.360322 18.546 0.551088 18.625 0.75 18.625H1.765C1.83145 18.6246 1.89506 18.598 1.942 18.551C1.98888 18.5032 2.0151 18.4389 2.015 18.372C2.015 17.9143 2.10514 17.4612 2.28028 17.0383C2.45542 16.6155 2.71212 16.2313 3.03573 15.9077C3.35934 15.5841 3.74353 15.3274 4.16635 15.1523C4.58917 14.9771 5.04234 14.887 5.5 14.887C5.95766 14.887 6.41083 14.9771 6.83365 15.1523C7.25647 15.3274 7.64066 15.5841 7.96427 15.9077C8.28788 16.2313 8.54458 16.6155 8.71972 17.0383C8.89486 17.4612 8.985 17.9143 8.985 18.372C8.9849 18.4389 9.01112 18.5032 9.058 18.551C9.10494 18.598 9.16855 18.6246 9.235 18.625H12.765C12.8314 18.6246 12.8951 18.598 12.942 18.551C12.9889 18.5032 13.0151 18.4389 13.015 18.372C13.0072 17.9084 13.0917 17.4478 13.2637 17.0172C13.4357 16.5866 13.6917 16.1946 14.0168 15.864C14.3419 15.5333 14.7295 15.2707 15.1571 15.0915C15.5848 14.9122 16.0438 14.8199 16.5075 14.8199C16.9712 14.8199 17.4302 14.9122 17.8579 15.0915C18.2855 15.2707 18.6731 15.5333 18.9982 15.864C19.3233 16.1946 19.5793 16.5866 19.7513 17.0172C19.9233 17.4478 20.0078 17.9084 20 18.372C19.9997 18.4465 19.9954 18.521 19.987 18.595C19.9834 18.6299 19.9871 18.6652 19.9979 18.6986C20.0088 18.732 20.0265 18.7627 20.05 18.7888C20.0734 18.8149 20.1021 18.8358 20.1342 18.8501C20.1662 18.8645 20.2009 18.8719 20.236 18.872H22C22.5304 18.872 23.0391 18.6613 23.4142 18.2862C23.7893 17.9111 24 17.4024 24 16.872V10.875ZM22 10.875V11.607C21.9999 11.6401 21.9932 11.6729 21.9803 11.7034C21.9675 11.734 21.9487 11.7617 21.9251 11.7849C21.9015 11.8081 21.8735 11.8265 21.8427 11.8389C21.812 11.8512 21.7791 11.8574 21.746 11.857L19.246 11.819C19.1804 11.818 19.1178 11.7911 19.0718 11.7444C19.0258 11.6976 19 11.6346 19 11.569V9.125C19 9.0587 19.0263 8.99511 19.0732 8.94822C19.1201 8.90134 19.1837 8.875 19.25 8.875H20C20.5304 8.875 21.0391 9.08571 21.4142 9.46079C21.7893 9.83586 22 10.3446 22 10.875Z" />
                                <path d="M16.5 20.875C17.8807 20.875 19 19.7557 19 18.375C19 16.9943 17.8807 15.875 16.5 15.875C15.1193 15.875 14 16.9943 14 18.375C14 19.7557 15.1193 20.875 16.5 20.875Z" />
                                <path d="M5.5 20.875C6.88071 20.875 8 19.7557 8 18.375C8 16.9943 6.88071 15.875 5.5 15.875C4.11929 15.875 3 16.9943 3 18.375C3 19.7557 4.11929 20.875 5.5 20.875Z" />
                            </g>
                        </svg>
                        Lieferung in 24 Stunden
                        </div>
                    </div>
                    <div className="c-box">
                        <div className='o-block-short o-block-short--centered t-text-uniform'>
                            <svg className="c-icon c-icon--s o-block-short__short-item" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.5 4.5H1.5C1.23478 4.5 0.98043 4.60536 0.792893 4.79289C0.605357 4.98043 0.5 5.23478 0.5 5.5V18.5C0.5 18.7652 0.605357 19.0196 0.792893 19.2071C0.98043 19.3946 1.23478 19.5 1.5 19.5H22.5C22.7652 19.5 23.0196 19.3946 23.2071 19.2071C23.3946 19.0196 23.5 18.7652 23.5 18.5V5.5C23.5 5.23478 23.3946 4.98043 23.2071 4.79289C23.0196 4.60536 22.7652 4.5 22.5 4.5ZM3.5 8.5C3.30222 8.5 3.10888 8.44135 2.94443 8.33147C2.77998 8.22159 2.65181 8.06541 2.57612 7.88268C2.50043 7.69996 2.48063 7.49889 2.51921 7.30491C2.5578 7.11093 2.65304 6.93275 2.79289 6.79289C2.93275 6.65304 3.11093 6.5578 3.30491 6.51921C3.49889 6.48063 3.69996 6.50043 3.88268 6.57612C4.06541 6.65181 4.22159 6.77998 4.33147 6.94443C4.44135 7.10888 4.5 7.30222 4.5 7.5C4.5 7.76522 4.39464 8.01957 4.20711 8.20711C4.01957 8.39464 3.76522 8.5 3.5 8.5ZM12 15C11.4067 15 10.8266 14.8241 10.3333 14.4944C9.83994 14.1648 9.45542 13.6962 9.22836 13.1481C9.0013 12.5999 8.94189 11.9967 9.05764 11.4147C9.1734 10.8328 9.45912 10.2982 9.87868 9.87868C10.2982 9.45912 10.8328 9.1734 11.4147 9.05764C11.9967 8.94189 12.5999 9.0013 13.1481 9.22836C13.6962 9.45542 14.1648 9.83994 14.4944 10.3333C14.8241 10.8266 15 11.4067 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15ZM20.5 17.5C20.3022 17.5 20.1089 17.4414 19.9444 17.3315C19.78 17.2216 19.6518 17.0654 19.5761 16.8827C19.5004 16.7 19.4806 16.4989 19.5192 16.3049C19.5578 16.1109 19.653 15.9327 19.7929 15.7929C19.9327 15.653 20.1109 15.5578 20.3049 15.5192C20.4989 15.4806 20.7 15.5004 20.8827 15.5761C21.0654 15.6518 21.2216 15.78 21.3315 15.9444C21.4414 16.1089 21.5 16.3022 21.5 16.5C21.5 16.7652 21.3946 17.0196 21.2071 17.2071C21.0196 17.3946 20.7652 17.5 20.5 17.5Z" />
                            </svg>
                            Kauf auf Rechnung
                        </div>
                    </div>
                    <div className="c-box">
                        <div className='o-block-short o-block-short--centered t-text-uniform'>
                            <svg className="c-icon c-icon--s o-block-short__short-item" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.973 8.27101C16.0166 8.25113 16.0536 8.21911 16.0796 8.17877C16.1055 8.13843 16.1193 8.09148 16.1193 8.04351C16.1193 7.99555 16.1055 7.9486 16.0796 7.90826C16.0536 7.86792 16.0166 7.8359 15.973 7.81601L6.21596 3.36801C6.15205 3.33962 6.0829 3.32495 6.01296 3.32495C5.94303 3.32495 5.87387 3.33962 5.80996 3.36801L1.99296 5.02401C1.94787 5.04323 1.90941 5.07527 1.88238 5.11616C1.85535 5.15706 1.84094 5.205 1.84094 5.25401C1.84094 5.30303 1.85535 5.35097 1.88238 5.39186C1.90941 5.43276 1.94787 5.4648 1.99296 5.48401L12.283 9.77201C12.3465 9.7986 12.4148 9.81179 12.4836 9.81076C12.5524 9.80973 12.6203 9.7945 12.683 9.76601L15.973 8.27101Z" />
                                <path d="M22.062 5.49991C22.1059 5.48015 22.1432 5.44812 22.1694 5.40768C22.1956 5.36723 22.2095 5.32008 22.2095 5.27191C22.2095 5.22374 22.1956 5.1766 22.1694 5.13615C22.1432 5.0957 22.1059 5.06367 22.062 5.04391L12.4 0.846913C12.2739 0.791849 12.1377 0.763428 12 0.763428C11.8624 0.763428 11.7262 0.791849 11.6 0.846913L8.38002 2.24691C8.3358 2.26654 8.29823 2.29858 8.27185 2.33914C8.24548 2.37969 8.23145 2.42703 8.23145 2.47541C8.23145 2.52379 8.24548 2.57113 8.27185 2.61169C8.29823 2.65225 8.3358 2.68428 8.38002 2.70391L18.08 7.12591C18.145 7.15548 18.2156 7.17077 18.287 7.17077C18.3584 7.17077 18.429 7.15548 18.494 7.12591L22.062 5.49991Z" />
                                <path d="M0.846 6.63001C0.807998 6.6142 0.766683 6.60802 0.72572 6.61202C0.684758 6.61602 0.645416 6.63007 0.611186 6.65292C0.576957 6.67577 0.548899 6.70672 0.529503 6.74302C0.510107 6.77932 0.499973 6.81985 0.5 6.86101V18.007C0.499984 18.2044 0.558372 18.3973 0.667811 18.5616C0.77725 18.7258 0.932846 18.854 1.115 18.93L11.4 23.217C11.438 23.2328 11.4793 23.239 11.5203 23.235C11.5612 23.231 11.6006 23.2169 11.6348 23.1941C11.669 23.1712 11.6971 23.1403 11.7165 23.104C11.7359 23.0677 11.746 23.0272 11.746 22.986V11.34C11.7459 11.2906 11.7312 11.2424 11.7038 11.2013C11.6765 11.1602 11.6375 11.1281 11.592 11.109L0.846 6.63001Z" />
                                <path d="M13.25 22.9439C13.2502 22.9857 13.2608 23.0267 13.2809 23.0632C13.3009 23.0998 13.3298 23.1308 13.3648 23.1535C13.3999 23.1761 13.44 23.1896 13.4816 23.1929C13.5232 23.1961 13.5649 23.1889 13.603 23.1719L22.914 18.9399C23.0887 18.8605 23.2368 18.7324 23.3408 18.5711C23.4447 18.4097 23.4999 18.2219 23.5 18.0299V6.88595C23.5 6.84414 23.4896 6.80299 23.4696 6.76627C23.4496 6.72955 23.4208 6.69842 23.3856 6.67574C23.3505 6.65306 23.3103 6.63954 23.2686 6.63643C23.2269 6.63333 23.1851 6.64072 23.147 6.65795L13.4 11.0899C13.3562 11.1095 13.3189 11.1414 13.2928 11.1816C13.2667 11.2219 13.2529 11.2689 13.253 11.3169L13.25 22.9439Z" />
                            </svg>
                            Kostenloser Versand & Rückversand
                        </div>
                    </div>
                </div> */}
                {/* </div> */}
            </div>
        )
    }
}

ProductStage.propTypes = {
    images: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
    discountedPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
    addToCartButton: PropTypes.node,
    addToWishlist: PropTypes.func,
}

ProductStage.defaultProps = {
    images: [],
}

export default ComponentInjector.return('ProductStage', ProductStage)
