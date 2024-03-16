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
                                    <Link className="border-b pb-1 border-black sm:border-b-0" to={`product/${v.id}`} key={i}>
                                        <img src={v.thumbnail} className="mx-auto h-44 object-cover" />
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