import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        value: ""
    },
    reducers: {
        handleSearch(state, { payload }) {
            state.value = payload.search
        }
    }
})

export default searchSlice.reducer
export const selectSearch = ((state) => state.searchSlice.value)
export const {handleSearch} = searchSlice.actions