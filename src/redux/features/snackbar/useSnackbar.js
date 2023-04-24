import { useDispatch } from "react-redux";
import { addSnackbarQueue, removeSnackbarQueue } from "./index";

const useSnackbar = () => {
    const dispatch = useDispatch();
    
    const showSnackbar = (payload) => {
        console.log( 'showSnackbar', payload)
        dispatch(addSnackbarQueue(payload));
    };

    const hideSnackbar = () => {
    dispatch(removeSnackbarQueue());
    };
    return { showSnackbar, hideSnackbar };
};
export default useSnackbar;