import { ADD_TO_CART, REMOVE_TO_CART,UPDATE_TO_CART } from "../consts"
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