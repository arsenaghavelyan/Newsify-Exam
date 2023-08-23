import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slices/categorySlice";
import countrySlice from "./slices/countrySlice";
import newsSlice from "./slices/newsSlice";
import searchSlice from "./slices/searchSlice";

const store = configureStore({
    reducer: {
        categorySlice,
        countrySlice,
        newsSlice,
        searchSlice
    }
})

export default store