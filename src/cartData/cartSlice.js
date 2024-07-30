import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: []
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
        },
        removecart: (state, action) => {
            console.log("action", action);
            state.carts = state.carts.filter((cart) => (
                console.log("cart", cart.id, action.payload, cart.id !== action.payload),
                cart.id !== action.payload
            ))
            console.log("state.carts",state.carts);
        }

    }
})

export const { addCart, removecart } = cartSlice.actions

export default cartSlice.reducer