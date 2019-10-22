import React, { Component } from 'react'

import OrganismsListingFeatures from 'js/patterns/organisms/listings/feature-listing'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class OrganismsFooter extends Component {
    render () {
        return (
            <footer className='o-footer c-footer t-universe' role='contentinfo'>
                <div className='o-container o-prevent-space'>
                    <div className='o-footer__top c-footer__top'>
                        <OrganismsListingFeatures />
                    </div>
                    <div className='c-footer__body o-grid o-grid--small-half o-grid--large-forth'>
                        <div>
                            <p className='c-category-title t-text-ghost'>Kontakt</p>
                            <div className='o-distance-m'>
                                <div className='o-block-short o-block-short--centered o-footer__contact-details'>
                                    <svg className='o-block-short__short-item' width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M22.6731 17.0089L20.2211 14.5559C19.96 14.2944 19.6499 14.0868 19.3085 13.9453C18.9671 13.8037 18.6012 13.7308 18.2316 13.7308C17.862 13.7308 17.4961 13.8037 17.1547 13.9453C16.8133 14.0868 16.5032 14.2944 16.2421 14.5559L15.7421 15.0559C13.2778 12.9912 11.0016 10.7119 8.94008 8.24494L9.44008 7.74494C9.96659 7.21689 10.2622 6.50163 10.2622 5.75594C10.2622 5.01026 9.96659 4.29499 9.44008 3.76694L6.98308 1.31694C6.44669 0.804506 5.73341 0.518555 4.99158 0.518555C4.24976 0.518555 3.53648 0.804506 3.00009 1.31694L1.66009 2.66294C1.01617 3.31149 0.615007 4.16185 0.523961 5.07122C0.432914 5.98059 0.657528 6.8936 1.16009 7.65694C5.15518 13.6768 10.314 18.8367 16.3331 22.8329C17.099 23.3309 18.0119 23.5527 18.921 23.4618C19.83 23.3709 20.6809 22.9727 21.3331 22.3329L22.6781 20.9869C22.9396 20.726 23.1471 20.4161 23.2886 20.0749C23.4302 19.7336 23.5031 19.3679 23.5031 18.9984C23.5031 18.629 23.4302 18.2632 23.2886 17.922C23.1471 17.5808 22.9396 17.2709 22.6781 17.0099L22.6731 17.0089Z' fill='white' fillOpacity='0.8' />
                                    </svg>
                                    <div>
                                        <strong className='u-text-strong t-text-ghost'>02300 77 77 5</strong> <br />
                                        <span className='u-text-s'>24 Stunden Service</span>
                                    </div>
                                </div>
                            </div>
                            <div className='o-distance-m'>
                                <p>
                                    <span className='u-text-s'>Schreiben Sie uns</span> <br />
                                    <a href='' title='' className='c-link c-link--ghost'><strong>hallo@frontastic.cloud</strong></a>
                                </p>
                            </div>
                        </div>
                        <div className='c-footer__section'>
                            <p className='c-category-title t-text-ghost'>Zahlungsbedingungen</p>
                            <ul className='o-list-inline o-distance-m'>
                                <li className='o-list-inline__item'>
                                    <svg width='38' height='38' viewBox='0 0 38 38' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M33.25 7.12988H4.75C2.12665 7.12988 0 9.25653 0 11.8799V26.1299C0 28.7532 2.12665 30.8799 4.75 30.8799H33.25C35.8734 30.8799 38 28.7532 38 26.1299V11.8799C38 9.25653 35.8734 7.12988 33.25 7.12988Z' fill='white' />
                                        <path d='M10.42 15.9999C10.2227 15.809 9.98663 15.6628 9.72777 15.5713C9.46892 15.4799 9.19339 15.4453 8.91997 15.4699H6.84997C6.7827 15.4713 6.71799 15.4959 6.6669 15.5397C6.61582 15.5835 6.58155 15.6437 6.56997 15.7099L5.72997 20.9999C5.72554 21.0246 5.72663 21.05 5.73316 21.0742C5.7397 21.0985 5.75151 21.1209 5.76777 21.1401C5.78402 21.1592 5.8043 21.1745 5.82716 21.1848C5.85001 21.1952 5.87488 21.2003 5.89997 21.1999H6.89997C6.96016 21.1988 7.0185 21.1789 7.06688 21.143C7.11527 21.1072 7.15129 21.0572 7.16997 20.9999L7.39997 19.5599C7.41155 19.4937 7.44582 19.4335 7.4969 19.3897C7.54799 19.3459 7.6127 19.3213 7.67997 19.3199H8.32997C8.61722 19.3517 8.90793 19.3243 9.18424 19.2396C9.46054 19.1549 9.7166 19.0145 9.93669 18.8272C10.1568 18.6399 10.3362 18.4096 10.4641 18.1504C10.5919 17.8912 10.6654 17.6086 10.68 17.3199C10.7344 17.0942 10.7393 16.8593 10.6945 16.6315C10.6496 16.4036 10.5559 16.1882 10.42 15.9999ZM9.14997 17.3899C9.03997 18.1399 8.46997 18.1399 7.91997 18.1399H7.61997L7.83997 16.7499C7.84235 16.7083 7.85998 16.669 7.88948 16.6395C7.91898 16.61 7.95831 16.5923 7.99997 16.5899H8.13997C8.50997 16.5899 8.85997 16.5899 9.04997 16.7999C9.10921 16.8848 9.1489 16.9817 9.16619 17.0837C9.18348 17.1857 9.17794 17.2903 9.14997 17.3899ZM15.08 17.3899H14.08C14.0381 17.3897 13.9977 17.4048 13.9663 17.4325C13.9349 17.4601 13.9149 17.4984 13.91 17.5399V17.8199L13.84 17.7199C13.6905 17.5646 13.5071 17.4458 13.3041 17.373C13.1012 17.3001 12.8842 17.2751 12.67 17.2999C12.1229 17.3126 11.5986 17.5216 11.1929 17.8888C10.7872 18.256 10.527 18.7569 10.46 19.2999C10.4081 19.5666 10.4143 19.8413 10.4781 20.1053C10.542 20.3693 10.662 20.6165 10.83 20.8299C10.9859 21.0043 11.1795 21.1409 11.3961 21.2292C11.6127 21.3176 11.8466 21.3555 12.08 21.3399C12.335 21.3423 12.5878 21.293 12.8232 21.195C13.0587 21.0971 13.2719 20.9525 13.45 20.7699V21.0499C13.4455 21.0746 13.4466 21.1 13.4532 21.1242C13.4597 21.1485 13.4715 21.1709 13.4878 21.1901C13.504 21.2092 13.5243 21.2245 13.5472 21.2348C13.57 21.2452 13.5949 21.2503 13.62 21.2499H14.51C14.5772 21.2486 14.6419 21.224 14.693 21.1802C14.7441 21.1364 14.7784 21.0762 14.79 21.0099L15.32 17.5999C15.3418 17.5677 15.3519 17.529 15.3486 17.4903C15.3453 17.4516 15.3288 17.4151 15.3019 17.387C15.275 17.359 15.2393 17.341 15.2007 17.336C15.1622 17.3311 15.1231 17.3395 15.09 17.3599L15.08 17.3899ZM13.71 19.2999C13.6847 19.5775 13.555 19.8351 13.3471 20.0208C13.1392 20.2064 12.8686 20.3062 12.59 20.2999C12.4668 20.3068 12.3437 20.2861 12.2295 20.2394C12.1153 20.1927 12.013 20.1212 11.93 20.0299C11.8538 19.932 11.8001 19.8186 11.7724 19.6977C11.7448 19.5767 11.7439 19.4512 11.77 19.3299C11.7973 19.055 11.9263 18.8002 12.1315 18.6152C12.3368 18.4303 12.6037 18.3286 12.88 18.3299C13.0031 18.3231 13.1263 18.3437 13.2404 18.3905C13.3546 18.4372 13.4569 18.5087 13.54 18.5999C13.6166 18.6977 13.6715 18.8108 13.7008 18.9315C13.7301 19.0523 13.7333 19.1779 13.71 19.2999ZM20.35 17.3599H19.35C19.3024 17.3603 19.2556 17.3723 19.2137 17.3949C19.1719 17.4176 19.1362 17.4502 19.11 17.4899L17.74 19.4899L17.16 17.4899C17.1425 17.4292 17.1058 17.3758 17.0552 17.3379C17.0047 17.3 16.9431 17.2797 16.88 17.2799H15.88C15.8524 17.2798 15.8252 17.2864 15.8007 17.2991C15.7762 17.3118 15.7552 17.3302 15.7395 17.3529C15.7237 17.3755 15.7137 17.4016 15.7103 17.429C15.7069 17.4564 15.7102 17.4841 15.72 17.5099L16.81 20.7399L15.81 22.1999C15.7914 22.2255 15.7803 22.2557 15.7779 22.2872C15.7755 22.3187 15.782 22.3502 15.7965 22.3782C15.811 22.4063 15.8331 22.4297 15.8602 22.4459C15.8873 22.4621 15.9184 22.4704 15.95 22.4699H16.95C16.9967 22.4708 17.0429 22.4603 17.0847 22.4394C17.1265 22.4185 17.1626 22.3878 17.19 22.3499L20.49 17.5499C20.4958 17.5063 20.4844 17.4621 20.4583 17.4267C20.4322 17.3913 20.3934 17.3673 20.35 17.3599ZM25.14 15.9999C24.9427 15.809 24.7066 15.6628 24.4478 15.5713C24.1889 15.4799 23.9134 15.4453 23.64 15.4699H21.57C21.5027 15.4713 21.438 15.4959 21.3869 15.5397C21.3358 15.5835 21.3016 15.6437 21.29 15.7099L20.46 20.9999C20.4555 21.0246 20.4566 21.05 20.4632 21.0742C20.4697 21.0985 20.4815 21.1209 20.4978 21.1401C20.514 21.1592 20.5343 21.1745 20.5572 21.1848C20.58 21.1952 20.6049 21.2003 20.63 21.1999H21.69C21.7382 21.2005 21.785 21.1836 21.8218 21.1523C21.8585 21.1211 21.8827 21.0776 21.89 21.0299L22.13 19.5199C22.1416 19.4537 22.1758 19.3935 22.2269 19.3497C22.278 19.3059 22.3427 19.2813 22.41 19.2799H23.06C23.3472 19.3117 23.6379 19.2843 23.9142 19.1996C24.1905 19.1149 24.4466 18.9745 24.6667 18.7872C24.8868 18.5999 25.0662 18.3696 25.1941 18.1104C25.3219 17.8512 25.3954 17.5686 25.41 17.2799C25.457 17.0596 25.4573 16.8318 25.4108 16.6113C25.3643 16.3908 25.272 16.1825 25.14 15.9999ZM23.87 17.4199C23.76 18.1699 23.19 18.1699 22.64 18.1699H22.33L22.55 16.7799C22.5549 16.7384 22.5749 16.7001 22.6063 16.6725C22.6377 16.6448 22.6781 16.6297 22.72 16.6299H22.86C23.23 16.6299 23.58 16.6299 23.77 16.8399C23.8252 16.9191 23.8635 17.0088 23.8825 17.1034C23.9014 17.1981 23.9005 17.2956 23.88 17.3899L23.87 17.4199ZM29.8 17.4199H28.8C28.7581 17.4197 28.7177 17.4348 28.6863 17.4625C28.6549 17.4901 28.6349 17.5284 28.63 17.5699V17.8499L28.56 17.7499C28.4105 17.5946 28.2271 17.4758 28.0241 17.403C27.8212 17.3301 27.6042 17.3051 27.39 17.3299C26.8429 17.3426 26.3186 17.5516 25.9129 17.9188C25.5072 18.286 25.247 18.7869 25.18 19.3299C25.1281 19.5966 25.1343 19.8713 25.1981 20.1353C25.262 20.3993 25.382 20.6465 25.55 20.8599C25.7059 21.0343 25.8995 21.1709 26.1161 21.2592C26.3327 21.3476 26.5666 21.3855 26.8 21.3699C27.055 21.3723 27.3078 21.323 27.5432 21.225C27.7787 21.1271 27.9919 20.9825 28.17 20.7999V21.0799C28.1655 21.1046 28.1666 21.13 28.1732 21.1542C28.1797 21.1785 28.1915 21.2009 28.2078 21.2201C28.224 21.2392 28.2443 21.2545 28.2672 21.2648C28.29 21.2752 28.3149 21.2803 28.34 21.2799H29.23C29.2972 21.2786 29.3619 21.254 29.413 21.2102C29.4641 21.1664 29.4984 21.1062 29.51 21.0399L30 17.5599C30.005 17.5335 30.0036 17.5062 29.996 17.4803C29.9884 17.4545 29.9747 17.4308 29.9562 17.4113C29.9376 17.3918 29.9147 17.3769 29.8893 17.368C29.8638 17.3591 29.8367 17.3563 29.81 17.3599L29.8 17.4199ZM28.43 19.2999C28.4047 19.5775 28.275 19.8351 28.0671 20.0208C27.8592 20.2064 27.5886 20.3062 27.31 20.2999C27.1868 20.3068 27.0637 20.2861 26.9495 20.2394C26.8353 20.1927 26.733 20.1212 26.65 20.0299C26.5738 19.932 26.5201 19.8186 26.4924 19.6977C26.4648 19.5767 26.4639 19.4512 26.49 19.3299C26.5173 19.055 26.6463 18.8002 26.8515 18.6152C27.0568 18.4303 27.3237 18.3286 27.6 18.3299C27.7231 18.3231 27.8463 18.3437 27.9604 18.3905C28.0746 18.4372 28.1769 18.5087 28.26 18.5999C28.3372 18.6974 28.3924 18.8104 28.4218 18.9313C28.4511 19.0521 28.4539 19.1779 28.43 19.2999ZM32.1 15.4399H31.1C31.0581 15.4397 31.0177 15.4548 30.9863 15.4825C30.9549 15.5101 30.9349 15.5484 30.93 15.5899L30.13 20.9999C30.1255 21.0246 30.1266 21.05 30.1332 21.0742C30.1397 21.0985 30.1515 21.1209 30.1678 21.1401C30.184 21.1592 30.2043 21.1745 30.2272 21.1848C30.25 21.1952 30.2749 21.2003 30.3 21.1999H31.15C31.2172 21.1986 31.2819 21.174 31.333 21.1302C31.3841 21.0864 31.4184 21.0262 31.43 20.9599L32.27 15.6299C32.2728 15.606 32.2705 15.5817 32.2633 15.5587C32.256 15.5357 32.2439 15.5146 32.2278 15.4966C32.2118 15.4786 32.192 15.4643 32.17 15.4545C32.1479 15.4447 32.1241 15.4398 32.1 15.4399Z' fill='#31333E' />
                                    </svg>
                                </li>
                                <li className='o-list-inline__item'>
                                    <svg width='38' height='38' viewBox='0 0 38 38' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M33.25 7.12012H4.75C2.12665 7.12012 0 9.24676 0 11.8701V26.1201C0 28.7435 2.12665 30.8701 4.75 30.8701H33.25C35.8734 30.8701 38 28.7435 38 26.1201V11.8701C38 9.24676 35.8734 7.12012 33.25 7.12012Z' fill='white' />
                                        <path d='M15.7599 15.5699L12.8899 22.4599H10.9999L9.60994 16.9999C9.59871 16.8706 9.55411 16.7464 9.48049 16.6395C9.40687 16.5326 9.30675 16.4466 9.18994 16.3899C8.63369 16.1206 8.04573 15.9224 7.43994 15.7999V15.5999H10.4399C10.6376 15.5999 10.8288 15.6704 10.9791 15.7987C11.1294 15.927 11.229 16.1047 11.2599 16.2999L12.0099 20.2999L13.8499 15.6099L15.7599 15.5699ZM23.0899 20.2099C23.0899 18.3899 20.5899 18.2899 20.6099 17.4799C20.6099 17.2299 20.8499 16.9699 21.3599 16.8999C21.9573 16.8442 22.5586 16.9513 23.0999 17.2099L23.4099 15.7499C22.8797 15.5477 22.3174 15.4426 21.7499 15.4399C19.9999 15.4399 18.7499 16.3799 18.7499 17.7199C18.7499 18.7199 19.6299 19.2699 20.2999 19.5999C20.9699 19.9299 21.2199 20.1499 21.2199 20.4599C21.2199 20.9199 20.6699 21.1299 20.1599 21.1299C19.5255 21.1426 18.8985 20.9911 18.3399 20.6899L17.9999 22.1999C18.6366 22.4508 19.3157 22.5764 19.9999 22.5699C21.8599 22.5699 23.0699 21.6499 23.0799 20.2099H23.0899ZM27.6999 22.4599H29.3399L27.9099 15.5699H26.4099C26.2483 15.5704 26.0905 15.6192 25.9569 15.7101C25.8232 15.801 25.7198 15.9298 25.6599 16.0799L22.9999 22.4599H24.8599L25.2299 21.4599H27.4999L27.6999 22.4599ZM25.6999 20.0199L26.6299 17.4299L27.1999 19.9999L25.6999 20.0199ZM18.2599 15.5699L16.7999 22.4599H15.0599L16.5199 15.5699H18.2599Z' fill='#31333E' />
                                    </svg>
                                </li>
                                <li className='o-list-inline__item'>
                                    <svg width='38' height='38' viewBox='0 0 38 38' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M33.25 7.12988H4.75C2.12665 7.12988 0 9.25653 0 11.8799V26.1299C0 28.7532 2.12665 30.8799 4.75 30.8799H33.25C35.8734 30.8799 38 28.7532 38 26.1299V11.8799C38 9.25653 35.8734 7.12988 33.25 7.12988Z' fill='white' />
                                        <path d='M18.11 15.08C17.3965 14.5917 16.5632 14.3074 15.7 14.2578C14.8368 14.2082 13.9764 14.3952 13.2116 14.7985C12.4468 15.2019 11.8066 15.8063 11.3601 16.5467C10.9135 17.2871 10.6775 18.1354 10.6775 19C10.6775 19.8646 10.9135 20.7129 11.3601 21.4533C11.8066 22.1937 12.4468 22.7981 13.2116 23.2015C13.9764 23.6048 14.8368 23.7918 15.7 23.7422C16.5632 23.6926 17.3965 23.4083 18.11 22.92C17.1519 21.839 16.6229 20.4445 16.6229 19C16.6229 17.5555 17.1519 16.161 18.11 15.08Z' fill='#31333E' />
                                        <path d='M22.5601 23.75C25.1834 23.75 27.3101 21.6234 27.3101 19C27.3101 16.3766 25.1834 14.25 22.5601 14.25C19.9367 14.25 17.8101 16.3766 17.8101 19C17.8101 21.6234 19.9367 23.75 22.5601 23.75Z' fill='#31333E' />
                                    </svg>
                                </li>
                            </ul>
                        </div>
                        <div className='c-footer__section'>
                            <p className='c-category-title t-text-ghost'>Unternehmen</p>
                            <nav className='o-distance-m'>
                                <ul className='o-list-bare'>
                                    <li className='o-list-bare__item'>
                                        <a href='' title='Über uns'>Über uns</a>
                                    </li>
                                    <li className='o-list-bare__item'>
                                        <a href='' title='Partnerschaften'>Partnerschaften</a>
                                    </li>
                                    <li className='o-list-bare__item'>
                                        <a href='' title='Karriere'>Karriere</a>
                                    </li>
                                    <li className='o-list-bare__item'>
                                        <a href='' title='Presse'>Presse</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className='c-footer__section'>
                            <p className='c-category-title t-text-ghost'>Service</p>
                            <nav className='o-distance-m'>
                                <ul className='o-list-bare'>
                                    <li className='o-list-bare__item'>
                                        <a href='' title='Bestellung nachverfolgen'>Bestellung nachverfolgen</a>
                                    </li>
                                    <li className='o-list-bare__item'>
                                        <a href='' title='FAQ'>FAQ</a>
                                    </li>
                                    <li className='o-list-bare__item'>
                                        <a href='' title='Lieferung'>Lieferung</a>
                                    </li>
                                    <li className='o-list-bare__item'>
                                        <a href='' title='Rücksendung'>Rücksendung</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className='o-footer__bottom'>
                        <ul className='o-list-inline'>
                            <li className='o-list-inline__item'>
                                <a href='' title=''>
                                    <svg className='c-icon c-icon--s' width='20' height='23' viewBox='0 0 20 23' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M20 3.59375V19.4062C20 20.5967 19.0402 21.5625 17.8571 21.5625H14.0491V13.6023H16.7545L17.1429 10.5656H14.0491V8.625C14.0491 7.74453 14.2902 7.14707 15.5446 7.14707H17.1429V4.43379C16.8661 4.39785 15.9196 4.3125 14.8125 4.3125C12.5089 4.3125 10.9286 5.72754 10.9286 8.32852V10.5701H8.21429V13.6068H10.933V21.5625H2.14286C0.959821 21.5625 0 20.5967 0 19.4062V3.59375C0 2.40332 0.959821 1.4375 2.14286 1.4375H17.8571C19.0402 1.4375 20 2.40332 20 3.59375Z' fill='white' fillOpacity='0.8' />
                                    </svg>
                                </a>
                            </li>
                            <li className='o-list-inline__item'>
                                <a href='' title=''>
                                    <svg className='c-icon c-icon--s' width='20' height='23' viewBox='0 0 20 23' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M17.8571 1.4375H2.14286C0.959821 1.4375 0 2.40332 0 3.59375V19.4062C0 20.5967 0.959821 21.5625 2.14286 21.5625H17.8571C19.0402 21.5625 20 20.5967 20 19.4062V3.59375C20 2.40332 19.0402 1.4375 17.8571 1.4375ZM15.6741 8.57109C15.683 8.69688 15.683 8.82715 15.683 8.95293C15.683 12.8477 12.7366 17.3354 7.35268 17.3354C5.69196 17.3354 4.15179 16.8502 2.85714 16.0146C3.09375 16.0416 3.32143 16.0506 3.5625 16.0506C4.93304 16.0506 6.19196 15.5834 7.19643 14.7928C5.91071 14.7658 4.83036 13.9168 4.45982 12.7488C4.91071 12.8162 5.31696 12.8162 5.78125 12.6949C4.44196 12.4209 3.4375 11.235 3.4375 9.80195V9.76602C3.82589 9.98613 4.28125 10.1209 4.75893 10.1389C4.35733 9.87007 4.02812 9.50541 3.80066 9.07743C3.5732 8.64945 3.45457 8.17147 3.45536 7.68613C3.45536 7.13809 3.59821 6.63496 3.85268 6.19922C5.29464 7.98711 7.45982 9.15508 9.88839 9.28086C9.47321 7.28184 10.9598 5.66016 12.7455 5.66016C13.5893 5.66016 14.3482 6.01504 14.8839 6.59004C15.5446 6.46426 16.1786 6.21719 16.7411 5.88027C16.5223 6.56309 16.0625 7.13809 15.4554 7.50195C16.0446 7.43906 16.6161 7.27285 17.1429 7.04375C16.7455 7.63223 16.2455 8.15332 15.6741 8.57109Z' fill='white' fillOpacity='0.8' />
                                    </svg>

                                </a>
                            </li>
                        </ul>
                        <nav>
                            <ul className='o-list-inline o-footer__bottom__navigation'>
                                <li className='o-list-inline__item'>
                                    <a href='' title='Jobs' className='u-text-s'>Jobs</a>
                                </li>
                                <li className='o-list-inline__item'>
                                    <a href='' title='AGB' className='u-text-s'>AGB</a>
                                </li>
                                <li className='o-list-inline__item'>
                                    <a href='' title='Impressum' className='u-text-s'>Impressum</a>
                                </li>
                                <li className='o-list-inline__item'>
                                    <a href='' title='Datenschutz' className='u-text-s'>Datenschutz</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </footer>
        )
    }
}

OrganismsFooter.propTypes = {
}

OrganismsFooter.defaultProps = {
}

export default ComponentInjector.return('OrganismsFooter', OrganismsFooter)
