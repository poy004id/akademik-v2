import { createSlice } from "@reduxjs/toolkit";
export const snackbarSlice = createSlice({
    name: "alert",
    initialState: {
        title: '',
        message: '',
        type: '',
        icon: '',

    },
    reducers: {
        setAlert: (state, action) => {
            state.title = action.payload.title;
            state.message = action.payload.message;
            state.icon = action.payload.icon;
            state.type = action.payload.type;

        },
        clearAlert: (state) => {
            state.title = '';
            state.message = '';
            state.icon = '';
            state.type = '';
        },
    }
});

export const { setAlert, clearAlert } = snackbarSlice.actions;
export default snackbarSlice.reducer;