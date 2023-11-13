import { configureStore } from "@reduxjs/toolkit";
import productApi from "./features/product/productApi";
import cartSlice from "./features/cart/cartSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        [productApi.reducerPath]: productApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware)
},
);

export default store;