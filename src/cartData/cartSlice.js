import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action) => {
            console.log("state",state.carts);
            const existingCartItem = state.carts.find(cart => cart.id === action.payload.id);

            console.log("existingCartItem", existingCartItem);
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
        }
    }
})

export const { addCart } = cartSlice.actions

export default cartSlice.reducer