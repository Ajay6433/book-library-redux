import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./slice/bookSlice"

const appStore = configureStore({
    reducer:{
        books : bookSlice,
    }
});

export default appStore;
