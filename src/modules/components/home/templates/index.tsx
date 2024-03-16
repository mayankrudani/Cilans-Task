import ShopNowProduct from "../component/first-banner";
import BrandBanner from "../component/brand-banner";
import Products from "../component/new-product";

const HomeTemplate = () => {
    return (
        <div>
            <ShopNowProduct />
            <Products />
            <BrandBanner />
        </div>
    )
}

export default HomeTemplate;