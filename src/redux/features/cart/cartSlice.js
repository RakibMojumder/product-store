import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie'

const initialState = {
    cart: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, action) => {
            state.cart = action.payload;
        },
        addToCart: (state, action) => {
            const product = action.payload
            const findProduct = state.cart.find(pd => pd._id === product._id);
            if (findProduct) {
                findProduct.quantity += 1
                state.cart.filter(product => product._id !== product._id).push(findProduct);
                Cookies.set('cart', JSON.stringify(state.cart))
            } else {
                const newProduct = { ...product, quantity: 1 }
                state.cart = [...state.cart, newProduct];
                Cookies.set('cart', JSON.stringify(state.cart))
            }
        },

        removeFromCart: (state, action) => {
            const filteredProduct = state.cart.filter(product => product._id !== action.payload._id);
            state.cart = filteredProduct;
            Cookies.set('cart', JSON.stringify(state.cart))
        },

        incrementProduct: (state, action) => {
            const findProduct = state.cart.find(product => product._id === action.payload._id);
            findProduct.quantity += 1;
            state.cart.filter(product => product._id !== findProduct._id).push(findProduct)
            Cookies.set('cart', JSON.stringify(state.cart))
        },

        decrementProduct: (state, action) => {
            const findProduct = state.cart.find(product => product._id === action.payload._id);
            findProduct.quantity -= 1;
            state.cart.filter(product => product._id !== findProduct._id).push(findProduct)
            Cookies.set('cart', JSON.stringify(state.cart))
        }
    }
});

export const { setCart, addToCart, removeFromCart, incrementProduct, decrementProduct } = cartSlice.actions;
export default cartSlice.reducer;