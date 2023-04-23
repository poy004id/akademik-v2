import { createSlice } from "@reduxjs/toolkit";
export const snackbarSlice = createSlice({
    name: "snackbar",
    initialState: [],
    reducers: {
        addSnackbarQueue: (state, action) => {
            state.push(action.payload);
        },
        removeSnackbarQueue: (state, action) => {
            state.shift();
        }
    }
});

export const { addSnackbarQueue, removeSnackbarQueue } = snackbarSlice.actions;
export default snackbarSlice.reducer;