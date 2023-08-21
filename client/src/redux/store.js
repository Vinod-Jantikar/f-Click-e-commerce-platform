import { applyMiddleware, combineReducers, createStore } from "redux";
import {loginReducer} from './login/reducer'
import {productsReducer} from "./products/reducer";
import {cartProductsReducer} from './cart/reducer';
import {wishlistProductsReducer} from './wishList/reducer';
import {searchProductsReducer} from './search/reducer';
import {visitURLReducer} from './visitURL/reducer'
import thunk from "redux-thunk";
import { addressReducer } from "./address/reducer";
import { orderProductsReducer } from "./yourOrder/reducer";


export const rootReducer = combineReducers({
    login: loginReducer,
    products: productsReducer,
    cart_products: cartProductsReducer,
    wishlistProducts: wishlistProductsReducer,
    searchProducts: searchProductsReducer,
    visitURL: visitURLReducer,
    address: addressReducer,
    orderProducts: orderProductsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))