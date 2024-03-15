import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageGallary from "../component/product-image";
import ProductDescription from "../component/product-desc";


const ProductPreview = () => {
    const [productDetails, setProductDetails] = useState<any>({})

    const params = useParams()

    const getProductDetails = async () => {
        const result = await fetch(`https://dummyjson.com/products/${params.id}`).then(res => res.json())
        setProductDetails(result)
    }

    useEffect(() => {
        getProductDetails()
    }, [params])

    return (
        <div className="relative lg:px-44 block bg-[#F1F1F1] ">
            {
                productDetails.id ?

                    <div className="flex flex-col lg:flex-row relative py-10">
                        <ImageGallary product={productDetails} />

                        <ProductDescription product={productDetails} />
                    </div>
                    :
                    <div className="px-5 py-20">Loading ....</div>
            }
        </div>
    )
}

export default ProductPreview;