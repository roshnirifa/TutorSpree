import React, { useRef } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import auth from '../../firebase_init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Form } from 'react-bootstrap';

import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';




const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation()
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    let from = location.state?.from?.pathname || "/";


    const handleSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        signInWithEmailAndPassword(email, pass)

    }
    if (user) {
        navigate(from, { replace: true });
    }
    const navigateSignUp = () => {
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }
    return (
        <div className='mx-auto box my-4'>
            <h2 className='text-center mt-3 text-primary'>Please login!!!!!</h2>
            <Form onSubmit={handleSubmit} className='m-5'>
                <Form.Group className="mb-3">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control ref={passRef} type="password" placeholder="Password" required />
                </Form.Group>

                <div className='text-center'>
                    <button className='btn btn-primary loginBtn'>Login</button>
                </div>
                <p className='mt-4  fw-bold'>New to TutorSpree? <span className='text-primary' onClick={navigateSignUp} style={{ cursor: 'pointer' }}>Please Register</span></p>


                <p className='mt-4  fw-bold'>Forget Password? <span className='text-primary' onClick={resetPassword} style={{ cursor: 'pointer' }}>Reset Password</span></p>


                <SocialLogin></SocialLogin>
                <ToastContainer />
            </Form>


        </div>
    );
};

export default Login;