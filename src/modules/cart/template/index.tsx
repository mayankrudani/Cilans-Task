import { useEffect, useState } from "react";



const CartLayout = () => {
    const [cartDetails, setCartDetails] = useState<any>()

    const removeToCartHandler = (product_id: string) => {
        console.log("remove to cart handler is trigger", product_id)

    }
    const addToCartHandler = (product_id: string) => {
        console.log("add to cart handler is trigger", product_id)

    }

    const getCartDetails = async () => {
        const getCart: any = localStorage.getItem("cart")
        const cartDetails = getCart ? JSON.parse(getCart) : getCart
        setCartDetails(cartDetails)
    }
    useEffect(() => {
        getCartDetails()
    }, [])

    return (
        <div className="block relative px-10 lg:px-44 py-10 bg-[#F1F1F1]">

            <div className="text-4xl fon-semibold">Cart Details</div>
            {
                cartDetails &&
                <div className=" mt-10">
                    <div className="w-full overflow-auto ">
                        <table className="table-auto min-w-[800px] border-collapse  border border-slate-400">
                            <thead>
                                <tr className="capitalize h-10 *:border *:border-slate-400">
                                    <th>img</th>
                                    <th>title</th>
                                    <th>quantity</th>
                                    <th>price</th>
                                    <th>total price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartDetails.cart_items.length ?
                                        cartDetails.cart_items.map((v: any, i: number) => {
                                            return (
                                                <tr key={i} className="h-20 capitalize  *:border *:border-slate-400 text-center">
                                                    <td>
                                                        <img src={v.thumbnail} className="mx-auto object-cover h-min w-16" />
                                                    </td>
                                                    <td>{v.title}</td>
                                                    <td>
                                                        <div className="flex items-center justify-center ">
                                                            <button
                                                                onClick={() => removeToCartHandler(v.product_id)}
                                                                className="hover:bg-red-700 transition-all duration-500 px-5 hover:text-white border border-black h-7"
                                                            >
                                                                -
                                                            </button>

                                                            <div className=" px-3 border border-x-0 border-black h-7">
                                                                {v.quantity}
                                                            </div>
                                                            <button
                                                                onClick={() => addToCartHandler(v.product_id)}
                                                                className="hover:bg-green-700 px-5 hover:text-white border border-black h-7"
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td>{v.unit_price}</td>
                                                    <td>{v.sub_total}</td>

                                                </tr>
                                            )
                                        })
                                        :
                                        <tr>Please Add Cart Items</tr>
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className="text-3xl font-semibold mt-10 text-end me-5">Total {cartDetails.total}</div>
                </div>
            }
        </div>
    )
}

export default CartLayout;