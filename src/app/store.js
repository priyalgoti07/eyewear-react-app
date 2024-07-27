import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../cartData/cartSlice"

export const store = configureStore({
    reducer: todoReducer
})