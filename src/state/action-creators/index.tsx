import { Dispatch } from "react";
import { ActionType } from "../action-types";
import { Action } from "../actions/index"
import { CartItemType } from "../../App";

export const setProducts = (products: CartItemType[]) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_PRODUCTS,
            payload: products
        })
    }
}

export const addProduct = (product: CartItemType) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADD_PRODUCT,
            payload: product
        })
    }
}