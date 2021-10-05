import { ActionType } from "../action-types/index";
import { CartItemType } from "../../App";

interface setProducts {
    type: ActionType.SET_PRODUCTS
    payload: CartItemType[]
}

interface addProduct {
    type: ActionType.ADD_PRODUCT
    payload: CartItemType
}

export type Action = setProducts | addProduct