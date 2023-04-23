import { onSignin } from "../../../services/authService";
import React, { useEffect, useState } from 'react';

const useSignIn = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const emailRef = React.useRef();
    const passwordRef = React.useRef();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [isSecure, setIsSecure] = React.useState(true);

    useEffect(() => {
        passwordRef?.current?.focus();
        passwordRef?.current?.focus()
        console.log('useEffect 1313')
    }, [isSecure]);
    console.log('password in useSignIn', password)


    const signIn = async (email, password) => {
        console.log('useSignIn email :', email)
        console.log('useSignIn password :', password)
        try {
            setLoading(true);
            const response = await onSignin(email, password);
            setLoading(false);
            return response;
        } catch (error) {
            setLoading(false);
            setError(error);
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
            setIsSecure,
            setEmail,
            setPassword,
            setLoading,
            setError
        }


}
export default useSignIn;