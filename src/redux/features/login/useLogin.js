import { useDispatch } from "react-redux";
import { handleChangeLogin } from "./index";

const useSnackbar = () => {
    const dispatch = useDispatch();
    
    const setLogin = (name, value) => {
        dispatch(handleChangeLogin(name,value, name));
    };

    return { setLogin };
};
export default useSnackbar;