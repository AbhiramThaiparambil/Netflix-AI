import { createSlice } from "@reduxjs/toolkit";

const ConfigSlice = createSlice({
    name: 'config',
    initialState: {
        aiSearch: false,
     
    },
    reducers: {
        enableAiSearch: (state, action) => {
            state.aiSearch = !state.aiSearch
        }
    }
})

export const {enableAiSearch} = ConfigSlice.actions;

export default ConfigSlice.reducer;