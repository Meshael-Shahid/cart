import { ActionType } from "../action-types/index";
import { Action } from "../actions/index"
import { CartItemType } from "../../App"

const initialState: CartItemType[] =  []

const reducer = (state = initialState, action: Action) => {
    switch (action.type){
        case ActionType.SET_PRODUCTS:
            return action.payload
        case ActionType.ADD_PRODUCT:
            return [...state, action.payload]
        default:
            return state
    }
}

export default reducer