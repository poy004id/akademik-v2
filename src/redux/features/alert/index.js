import { createSlice } from "@reduxjs/toolkit";
export const AlertTypes = {
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error',
    INFO:'info'
  };
const  initialState = {
    type: AlertTypes.INFO,
    title: null,
    message: null,
    icon: null,
    confirmText :null,
    cancelText:null,
    onCancelPress: null, 
    onConfirmPress: null,
};
export const snackbarSlice = createSlice({
    name: "alert",
    initialState: initialState,
    reducers: {
        setAlert: (state, action) => {
            return {
                ...state,

            type        : action.payload.type,
            icon        : action.payload.icon,
            title       : action.payload.title,
            message     : action.payload.message,
            confirmText : action.payload.confirmText,
            cancelText  : action.payload.cancelText,
            onCancelPress   : action.payload.onCancelPress,
            onConfirmPress  : action.payload.onConfirmPress
            }

        },
        clearAlert: (state) => {
            return {
                ...state,
                type: AlertTypes.INFO,
                title: null,
                message: null,
                icon: null,
                confirmText :null,
                cancelText:null,
                onCancelPress: null, 
                onConfirmPress: null,
            }
        },
    }
});

export const { setAlert, clearAlert } = snackbarSlice.actions;
export default snackbarSlice.reducer;