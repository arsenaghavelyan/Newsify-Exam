import { createSlice } from "@reduxjs/toolkit";

const countrySlice = createSlice({
    name: "countrySlice",
    initialState: {
        value: "us"
    },
    reducers: {
        handleCountry(state, { payload }) {
            state.value = payload.country
        }
    }

})

export const { handleCountry } = countrySlice.actions
export const selectCountry = ((state) => state.countrySlice.value)
export default countrySlice.reducer