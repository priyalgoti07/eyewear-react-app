import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: [],
    updatedQuanity: null
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action) => {
            const existingCartItem = state.carts.find(cart => cart.id === action.payload.id);

            if (existingCartItem) {
                // Update the quantity of the existing item
                existingCartItem.quantity += action.payload.quantity;

            } else {
                // Add the new item to the cart
                const cart = {
                    id: action.payload.id,
                    displayItem: action.payload.displayItem,
                    quantity: action.payload.quantity
                }
                state.carts.push(cart);
            }
            const updatedCartItem = state.carts.find(cart => cart.id === action.payload.id);
            state.lastUpdatedCartItem = updatedCartItem
                ? { id: updatedCartItem.id, quantity: updatedCartItem.quantity }
                : null;
        },
        removecart: (state, action) => {
            state.carts = state.carts.filter((cart) => (
                cart.id !== action.payload
            ))
        },
        updateQuntiy: (state, action) => {
            const existingCartItem = state.carts.find((cart) => cart.id === action.payload.id)
            if (existingCartItem) {
                // Update the quantity of the existing item
                existingCartItem.quantity += action.payload.incdec;
                state.updatedQuanity = { quantity: existingCartItem.quantity, id: action.payload.id }

            }
        }
    }
})

export const { addCart, removecart, updateQuntiy } = cartSlice.actions

export default cartSlice.reducer