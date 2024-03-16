import { ADD_TO_CART, REMOVE_TO_CART, UPDATE_TO_CART } from "../consts"
import { getDiscountPercentage } from "../../components/common/product-price"

const InitialState = async () => {
    const getCart: any = localStorage.getItem("cart")
    const cartDetails = getCart ? JSON.parse(getCart) : getCart
    return cartDetails
}

export default async function cartitems(state: any = InitialState(), action: any) {

    switch (action.type) {

        case ADD_TO_CART:
            
            const userId = localStorage.getItem("user_id")
            const product = action.data

            const unitPrice: number = getDiscountPercentage(product.price, product.discountPercentage)
            const quantity = 1

            const getCart: any = localStorage.getItem("cart")
            const cartDetails = getCart ? JSON.parse(getCart) : getCart

            if (!cartDetails) {
                const cartItems = {
                    product_id: product.id,
                    title: product.title,
                    thumbnail: product.thumbnail,
                    unit_price: unitPrice,
                    quantity: quantity,
                    sub_total: unitPrice * quantity
                }

                const cart = {
                    user_id: userId,
                    total: cartItems.sub_total,
                    cart_items: [
                        cartItems
                    ]
                }
                localStorage.setItem("cart", JSON.stringify(cart))
            }
            else {
                let isItemsPresent = false
                const cart_items = cartDetails.cart_items

                const UpdateCartItems = cart_items.map((v: any) => {
                    if (v.product_id === product.id) {
                        isItemsPresent = true
                        return {
                            product_id: v.product_id,
                            title: v.title,
                            thumbnail: v.thumbnail,
                            unit_price: v.unit_price,
                            quantity: v.quantity + 1,
                            sub_total: (v.quantity + 1) * v.unit_price
                        }
                    }
                    return v
                })

                const newItems = {
                    product_id: product.id,
                    title: product.title,
                    thumbnail: product.thumbnail,
                    unit_price: unitPrice,
                    quantity: quantity,
                    sub_total: unitPrice * quantity
                }

                const FinalCartItems = isItemsPresent ? UpdateCartItems : [...UpdateCartItems, newItems]
                const totalPrice = FinalCartItems.reduce((ini: number, curr: any) => ini + curr.sub_total, 0)
                const updatedCart = {
                    user_id: userId,
                    total: totalPrice,
                    cart_items: FinalCartItems
                }
                localStorage.setItem("cart", JSON.stringify(updatedCart))
            }

            const AddCartItemsResult = await InitialState()
            return AddCartItemsResult;

        case REMOVE_TO_CART:
            {
                const product_id = action.data
                const cartDetails = await InitialState()
                const updatedRemoveCartItems = cartDetails.cart_items.map((v: any) => {
                    if (v.product_id === product_id) {
                        const updateQuantity = v.quantity - 1
                        if (!updateQuantity) {
                            return;
                        }
                        return {
                            ...v,
                            quantity: updateQuantity,
                            sub_total: updateQuantity * v.unit_price
                        }
                    }
                    return v
                })

                // for filter data
                const updatedCart = updatedRemoveCartItems.filter((v: any) => v && v)
                const updatedTotalAmount = updatedCart.reduce((init: number, curr: any) => init + curr.sub_total, 0)

                const updatedCartDetails = {
                    ...cartDetails,
                    total: updatedTotalAmount,
                    cart_items: updatedCart
                }
                localStorage.setItem("cart", JSON.stringify(updatedCartDetails))
                const RemoveCartResult = await InitialState()
                return RemoveCartResult;
            }

        // add  more items in cart
        case UPDATE_TO_CART:
            {
                const product_id = action.data
                const cartDetails = await InitialState()

                const updatedCartItems = cartDetails.cart_items.map((v: any) => {
                    if (v.product_id === product_id) {
                        const updateQuantity = v.quantity + 1
                        return {
                            ...v,
                            quantity: updateQuantity,
                            sub_total: updateQuantity * v.unit_price
                        }
                    }
                    return v
                })

                const updatedTotalAmount = updatedCartItems.reduce((init: number, curr: any) => init + curr.sub_total, 0)
                const updatedCartDetails = {
                    user_id: cartDetails.user_id,
                    total: updatedTotalAmount,
                    cart_items: updatedCartItems
                }

                localStorage.setItem("cart", JSON.stringify(updatedCartDetails))
                const UpdateCartItemResult = await InitialState()
                return UpdateCartItemResult
            }

        default:
            return state
    }
}