import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageGallary from "../component/product-image";
import ProductDescription from "../component/product-desc";


const ProductPreview = (props: any) => {

    const [productDetails, setProductDetails] = useState<any>({})
    const params = useParams()

    const getProductDetails = async () => {
        const result = await fetch(`https://dummyjson.com/products/${params.id}`).then(res => res.json())
        setProductDetails(result)
    }

    useEffect(() => {
        getProductDetails()
    }, [params, props])

    return (
        <div className="lg:px-44 bg-[#F1F1F1]">
            {
                productDetails.id ?

                    <div className="flex flex-col lg:flex-row relative py-10">
                        <ImageGallary product={productDetails} />

                        <ProductDescription addToCartHandler={props.AddToCartHandler} product={productDetails} />
                    </div>
                    :
                    <div className="px-5 py-20">Loading ....</div>
            }
        </div>
    )
}

export default ProductPreview;