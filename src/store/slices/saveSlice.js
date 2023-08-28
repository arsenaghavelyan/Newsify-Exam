import { createSlice } from "@reduxjs/toolkit";

const saveSlice = createSlice({
    name: "save",
    initialState: {
        value: []
    },
    reducers: {
        addToBasket(state, { payload }) {
            state.value = payload.saveNews
        }
    }
})

export default saveSlice.reducer
export const { addToBasket } = saveSlice.actions
export const selectSaves = ((state) => state.saveSlice.value)