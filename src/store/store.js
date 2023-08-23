import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slices/categorySlice";
import countrySlice from "./slices/countrySlice";
import newsSlice from "./slices/newsSlice";

const store = configureStore({
    reducer: {
        categorySlice,
        countrySlice,
        newsSlice
    }
})

export default store