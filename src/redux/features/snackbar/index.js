import { createSlice } from "@reduxjs/toolkit";
export const snackbarSlice = createSlice({
    name: "snackbar",
    initialState: [1,2,3,4,5,7,8,9],
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