import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlicee"
const appStore=configureStore({
    reducer:{
        cart:cartReducer,
    }
});


export default appStore;