import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: "categorySlice",
    initialState: {
        value: []
    },
    reducers: {
        handleCategory(state , {payload}){
            state.value = payload.value
        }
    }

})

export const {handleCategory} = categorySlice.actions
export const selectCategory = ((state) => state.categorySlice.value)
export default categorySlice.reducer