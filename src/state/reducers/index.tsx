import { combineReducers  } from "redux";
import products from "./products"

const reducers = combineReducers({
    products
})

export default reducers

export type RootState = ReturnType<typeof reducers>