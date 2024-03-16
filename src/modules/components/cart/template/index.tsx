import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const CartLayout = (props: any) => {


    const [cartDetails, setCartDetails] = useState<any>()
    const [isDisable, setIsDisable] = useState<boolean>(false)

    const naviagate = useNavigate()

    const { updateToCartHandler, removeToCartHandler } = props

    const placeOrderHandler = () => {
        setIsDisable(true)
        setTimeout(() => {
            setIsDisable(false)
        }, 1500);
    }

    // Get Cart Items
    const getCartDetails = async () => {
        Promise.resolve(props.data).then(res => setCartDetails(res))
    }

    useEffect(() => {
        getCartDetails()
    }, [props])

    return (
        <div className="block relative px-10 lg:px-44 py-10 bg-[#F1F1F1]">
            <div className="text-4xl fon-semibold">Cart Details</div>
            {
                cartDetails ?
                    <div className=" mt-10">
                        <div className="w-full overflow-auto ">
                            <table className="table-auto min-w-[800px] w-full border-collapse  border border-slate-400">
                                <thead>
                                    <tr className="capitalize h-10 *:border *:border-slate-400">
                                        <th>image</th>
                                        <th>title</th>
                                        <th>quantity</th>
                                        <th>price</th>
                                        <th>total price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartDetails.cart_items.length ?
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
                                                                onClick={() => updateToCartHandler(v.product_id)}
                                                                className="hover:bg-green-700 px-5 hover:text-white border border-black h-7"
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td>₹ {v.unit_price}</td>
                                                    <td>₹ {v.sub_total}</td>
                                                </tr>
                                            )
                                        })
                                        :
                                        <tr className="h-12">
                                            <td colSpan={3}>
                                                Please Add Cart Items
                                            </td>
                                            <td>
                                                <button onClick={() => naviagate("/")} className="text-white bg-black border-0 px-3 py-1">
                                                    Go to shop
                                                </button>
                                            </td>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="text-3xl font-semibold mt-10 text-center lg:text-end lg:me-5">Total: ₹ {cartDetails.total}</div>

                        <div className="mt-5 block flex justify-center lg:justify-end lg:me-5">
                            {cartDetails.cart_items.length ?
                                <button
                                    onClick={() => placeOrderHandler()}
                                    className="px-5 py-2 text-white bg-black  disabled:opacity-50 border-0"
                                    disabled={isDisable}
                                >
                                    Place Order
                                </button>
                                :
                                <div></div>
                            }
                        </div>
                    </div>
                    :
                    <div className="py-10 text-center">
                        <div className="my-4 font-semibold">
                            No Cart Items present, Please add cart items
                        </div>
                        <button onClick={() => naviagate("/")} className="text-white bg-black border-0 px-3 py-1">
                            Go to shop
                        </button>
                    </div>
            }
        </div>
    )
}

export default CartLayout;