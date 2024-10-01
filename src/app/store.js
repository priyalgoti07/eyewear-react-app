import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../cartData/cartSlice"
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";


// Define the persist configuration for the cart reducer
const persistconfig = {
    key: 'cart',
    storage
};
// Wrap the cart reducer with the persistReducer
const persistedReducer = persistReducer(persistconfig, todoReducer)


// Configure your Redux store using the persisted reducer
export const store = configureStore({
    reducer: persistedReducer
})


export const persist = persistStore(store)