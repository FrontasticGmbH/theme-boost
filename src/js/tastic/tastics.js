import AccountAddresses from './account/addresses/tastic.jsx'
import AccountConfirm from './account/confirm/tastic.jsx'
import AccountLogin from './account/login/tastic.jsx'
import AccountOrders from './account/orders/tastic.jsx'
import AccountProfile from './account/profile/tastic.jsx'
import AccountResetPasswordTastic from './account/resetPassword/tastic.jsx'
import AccountVouchers from './account/vouchers/tastic.jsx'
import AccountWishlists from './account/wishlists/tastic.jsx'
import Card from './card/tastic.jsx'
import Cart from './cart/tastic.jsx'
import Checkout from './checkout/tastic.jsx'
import Content from './content/tastic.jsx'
import ContentList from './contentList/tastic.jsx'
import BrandContentful from './brandContentful/tastic.jsx'
import CategoryDescription from './categoryDescription/tastic.jsx'
import CategoryImage from './categoryImage/tastic.jsx'
import DatavisBarChart from './datavis/barChart/tastic.jsx'
import DatavisLineChart from './datavis/lineChart/tastic.jsx'
import DatavisExample from './datavis/datavisExample/tastic.jsx'
import ImageBanner from './imageBanner/tastic.jsx'
import Markdown from './markdown/tastic.jsx'
import Navigation from './navigation/tastic.jsx'
import Ordered from './ordered/tastic.jsx'
import Product from './product/tastic.jsx'
import ProductTitle from './product/title/tastic.jsx'
import ProductImage from './product/image/tastic.jsx'
import ProductBrand from './product/brand/tastic.jsx'
import ProductPrice from './product/price/tastic.jsx'
import ProductAddToCart from './product/addToCart/tastic.jsx'
import ProductAddToWishlist from './product/addToWishlist/tastic.jsx'
import ProductDescription from './product/description/tastic.jsx'
import ProductStock from './product/stock/tastic.jsx'
import ProductList from './productList/tastic.jsx'
import ProductListFilter from './productListFilter/tastic.jsx'
import ProductSlider from './productSlider/tastic.jsx'
import Teaser from './teaser/tastic.jsx'
import HorizontalSpacer from './horisontal-spacer/tastic.jsx'
// import Text from './text/tastic.jsx'

export default (() => {
    return {
        'account-addresses': AccountAddresses,
        'account-confirm': AccountConfirm,
        'account-login': AccountLogin,
        'account-orders': AccountOrders,
        'account-profile': AccountProfile,
        'account-resetPassword': AccountResetPasswordTastic,
        'account-vouchers': AccountVouchers,
        'account-wishlists': AccountWishlists,
        'card': Card,
        'cart': Cart,
        'checkout': Checkout,
        'content': Content,
        'contentList': ContentList,
        'brand-contentful': BrandContentful,
        'categoryDescription': CategoryDescription,
        'categoryImage': CategoryImage,
        'datavis-barChart': DatavisBarChart,
        'datavis-lineChart': DatavisLineChart,
        'datavis-example': DatavisExample,
        'imageBanner': ImageBanner,
        'markdown': Markdown,
        'navigation': Navigation,
        'ordered': Ordered,
        'productList': ProductList,
        'productListFilter': ProductListFilter,
        'product': Product,
        'product-title': ProductTitle,
        'product-image': ProductImage,
        'product-brand': ProductBrand,
        'product-addToCart': ProductAddToCart,
        'product-addToWishlist': ProductAddToWishlist,
        'product-description': ProductDescription,
        'product-stock': ProductStock,
        'product-price': ProductPrice,
        productSlider: ProductSlider,
        teaser: Teaser,
        'horizontal-spacer': HorizontalSpacer,
    }
})()
