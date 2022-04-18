import React from 'react';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase_init';
import './SocialLogin.css';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook] = useSignInWithFacebook(auth);
    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div className='mx-auto w-50'>
            <div className='d-flex align-items-center '>
                <div className='orDiv' ></div>
                <p className='mb-1'>or</p>
                <div className='orDiv'></div>
            </div>
            <di className='d-flex btn-group'>
                <button className='btn btn-success mb-3 ' onClick={() => signInWithGoogle()} ><BsGoogle className='icon'></BsGoogle> Signin With Google</button>
                <button className='btn btn-success mb-3 ' onClick={() => signInWithFacebook()}> <BsFacebook className='icon'></BsFacebook>Signin With Facebook</button>

            </di>

        </div>
    );
};

export default SocialLogin;