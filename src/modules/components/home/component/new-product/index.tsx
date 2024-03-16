import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDiscountPercentage } from "../../../common/product-price";

const Products = () => {
    const [products, setProducts] = useState<any[]>([])
    const [categories, setCategories] = useState<string[]>([])
    const [activeCategory, setActiveCategory] = useState<string>("all products")


    // Get Category List
    const getCategoryList = async () => {
        const Category = await fetch('https://dummyjson.com/products/categories?limit=10')
            .then(res => res.json())
        const cat = Category.filter((v: string, i: number) => i < 3 && v)
        setCategories(["all products", ...cat])
    }

    // Get PRoduct List
    const getProductList = async () => {
        const response = await fetch(`https://dummyjson.com/products${activeCategory === "all products" ? "" : `/category/${activeCategory}`}?limit=8&skip=${activeCategory === "all products" ? "10" : "0"}`).then(res => res.json())
        setProducts(response.products)
    }

    useEffect(() => {
        getProductList()
    }, [activeCategory])

    useEffect(() => {
        getCategoryList()
    }, [])

    return (

        <div className="px-10 lg:px-20 py-10">
            <div className="text-5xl text-center w-full font-semi">New Products</div>

            {/* Categories */}
            <div className="hidden lg:flex mt-10 justify-between">
                <div className="flex">
                    {
                        categories.map((v: string, i: number) =>
                            <div
                                key={i}
                                className={`mx-2 capitalize cursor-pointer ${v == activeCategory && "font-semibold"}`}
                                onClick={() => setActiveCategory(v)}
                            >
                                {v}
                            </div>
                        )}

                </div>
                <button className="border-0 px-4 py-1 bg-black flex items-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 0 17 14" fill="none">
                        <path d="M15.7554 1H1.4053C0.745927 1 0.413209 1.60623 0.880413 1.96026L6.60074 6.29549V11.125C6.60074 11.3085 6.71893 11.4805 6.91738 11.5858L9.39181 12.8979C9.87998 13.1568 10.5598 12.8944 10.5598 12.437V6.29549L16.2803 1.96026C16.7466 1.60694 16.4161 1 15.7554 1Z" stroke="white" />
                    </svg>
                    <span className="ms-1">
                        Filter
                    </span>
                </button>
            </div>

            {/* Product List */}
            <div>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5">
                    {
                        products.length ?
                            products.map((v: any, i: number) => {
                                return (
                                    <Link className="group border-b pb-1 border-black sm:border-b-0" to={`product/${v.id}`} key={i}>
                                        <div className="relative overflow-hidden ">
                                            <img src={v.thumbnail} className="mx-auto h-44 object-cover" />
                                            <div className={`bg-black py-2 px-3 absolute -bottom-10 left-0 right-0 flex justify-between items-center group-hover:bottom-0 tarnsition-all duration-300`}>
                                                <div className="flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 26 19" fill="none">
                                                        <path d="M4.30766 11.8471L12.4872 17.6694C12.6546 17.7886 12.7383 17.8482 12.8295 17.8712C12.9096 17.8913 12.9935 17.8913 13.0735 17.8712C13.1648 17.8482 13.2485 17.7886 13.4159 17.6694L21.5954 11.8471C24.6548 9.66935 24.9976 5.25373 22.311 2.6299C19.8716 0.247387 15.8563 0.721629 14.0389 3.60689L13.5899 4.31983C13.294 4.78964 12.6091 4.78964 12.3132 4.31983L11.8641 3.60689C10.0468 0.721628 6.0315 0.247387 3.59204 2.6299C0.905486 5.25373 1.24832 9.66935 4.30766 11.8471Z" stroke="white" strokeWidth="2" />
                                                    </svg>

                                                    <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 26 19" fill="none">
                                                        <ellipse cx="10.7542" cy="7.8" rx="8.97394" ry="6.8" stroke="white" strokeWidth="2" />
                                                        <path d="M24.2151 18L19.7281 14.6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                                    </svg>
                                                </div>
                                                <div className="flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 33 24" fill="none">
                                                        <path d="M11.4227 12L11.4227 9.27879C11.4227 6.36339 13.7861 4 16.7015 4V4C19.6169 4 21.9803 6.3634 21.9803 9.27879L21.9803 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                                        <path d="M5.75217 12.5627C5.93852 10.8682 6.03169 10.021 6.60141 9.51049C7.17112 9 8.02348 9 9.72819 9H23.6749C25.3796 9 26.232 9 26.8017 9.51049C27.3714 10.021 27.4646 10.8682 27.6509 12.5627L28.3348 18.7814C28.4487 19.8169 28.5057 20.3347 28.2076 20.6673C27.9095 21 27.3886 21 26.3468 21H7.05629C6.0145 21 5.49361 21 5.19553 20.6673C4.89745 20.3347 4.95439 19.8169 5.06827 18.7814L5.75217 12.5627Z" stroke="white" strokeWidth="2" />
                                                    </svg>
                                                    <div className="ms-2 text-white text-[12px]">Sop Now</div>
                                                </div>

                                            </div>
                                        </div>
                                        <div>
                                            <div className="my-2 font-semibold">
                                                {v.title}
                                            </div>
                                            <div className="pr-4 flex justify-between">
                                                <div className="font-normal text-[#777777] capitalize">
                                                    {v.category}
                                                </div>
                                                <div className="font-semibold">
                                                    <span className="text-gray-500 me-2 line-through ">₹ {v.price}</span>
                                                    <span className="text-red-600">
                                                        {getDiscountPercentage(v.price, v.discountPercentage)}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                            :
                            <div>
                                loading ....
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Products;