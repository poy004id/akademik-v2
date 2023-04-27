import { onSignUp, handleError } from "../../../services/authService";
import React, { useEffect, useState, useRef } from 'react';
import useSnackbar from "../../../redux/features/snackbar/useSnackbar";

const useSignUp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const emailRef = useRef();
    const passwordRef = useRef();
    const scrollViewRef = useRef();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [isSecure, setIsSecure] = useState(true);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');


    const {showSnackbar} = useSnackbar()


    const signUp = async (email, password) => {
        try {
            if (!email ) {
                return setEmailError('Mohon masukan email yang valid');
            }
            if (!password) {
                return setPasswordError('Password tidak boleh kosong');
            }

            setLoading(true);
            await onSignUp(email, password);
            setLoading(false);
            // return ;
        } catch (error) {
            setLoading(false);
            showSnackbar('Terjadi kesalahan server')
            console.log(error);
        }
    }
    return { signUp, 
            isLoading, 
            error, 
            emailRef, 
            passwordRef, 
            email,
            password,
            loading,
            isSecure,
            emailError,
            passwordError,
            setEmailError,
            setPasswordError,
            setIsSecure,
            setEmail,
            setPassword,
            setLoading,
            setError
        }


}
export default useSignUp;