import { onSignin, handleError } from "../../../services/authService";
import React, { useEffect, useState, useRef } from 'react';
import useSnackbar from "../../../redux/features/snackbar/useSnackbar";

const useSignIn = () => {
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


    const signIn = async (email, password) => {
        try {
            if (!email ) {
                return setEmailError('Mohon masukan email yang valid');
            }
            if (!password) {
                return setPasswordError('Password tidak boleh kosong');
            }

            setLoading(true);
            await onSignin(email, password);
            setLoading(false);
            // return ;
        } catch (error) {
            setLoading(false);
            showSnackbar('Terjadi kesalahan server')
            console.log(error);
        }
    }
    return { signIn, 
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
export default useSignIn;