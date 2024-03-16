import { useState } from "react";
import { getDiscountPercentage } from "../../../common/product-price";

const ProductDescription = ({ product, addToCartHandler }: any) => {
    const [isSsuccess, setIsSuccess] = useState<boolean>(false)

    const addToCart = () => {
        addToCartHandler(product)
        setIsSuccess(true)
        setTimeout(() => {
            setIsSuccess(false)
        }, 1200);
    }

    return (
        <div className="text-center lg:text-start lg:ps-10 capitalize sticky h-full top-12">

            <div className="my-3 capitalize">{product.category}</div>
            <div className="text-3xl font-semibold">{product.title}</div>
            <div className="mt-3">{product.description}</div>

            <div className="mt-3 font-semibold">
                Brand: {product.brand}
            </div>

            <div className="mt-3 font-semibold">
                Rating: {product.rating}
            </div>

            <div className="font-semibold text-xl mt-3">
                <span className="text-gray-500 me-2 line-through ">₹ {product.price}</span>
                <span className="text-red-600">
                    {getDiscountPercentage(product.price, product.discountPercentage)}
                </span>
            </div>

            <div className="my-3">
                Available Stock: {product.stock}
            </div>

            <button onClick={() => addToCart()} className="border-0 px-4 py-1 bg-black text-white">Add to cart</button>

            {isSsuccess &&
                <div
                    id="toast-success"
                    className={` fixed bottom-10 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow ${isSsuccess ? "right-0" : "right-96"} transition-all duration-500`}
                    role="alert"
                >
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span className="sr-only">Check icon</span>
                    </div>
                    <div className="ms-3 text-sm font-normal">Item saved successfully.</div>
                    <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
                        <span className="sr-only">Close</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                </div>
            }
        </div>
    )
}

export default ProductDescription;