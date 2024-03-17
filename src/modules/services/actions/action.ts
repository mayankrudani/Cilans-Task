import { ADD_TO_CART, REMOVE_TO_CART, UPDATE_TO_CART, GET_CART_DETAILS } from "../consts"

export const GetCartDetails = (data: any) => {
    return {
        type: GET_CART_DETAILS,
        data: data
    }
}

export const AddToCart = (data: any) => {
    return {
        type: ADD_TO_CART,
        data: data
    }
}

export const RemoveToCart = (data: any) => {
    return {
        type: REMOVE_TO_CART,
        data: data
    }
}

export const UpdateToCart = (data: any) => {
    return {
        type: UPDATE_TO_CART,
        data: data
    }
}