import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase_init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Form } from 'react-bootstrap';

import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {

    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        signInWithEmailAndPassword(email, pass)

    }
    if (user) {
        navigate('/')
    }
    const navigateSignUp = () => {
        navigate('/register');
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
                <Form.Group className="mb-3" >
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <div className='text-center'>
                    <button className='btn btn-primary'>Login</button>
                </div>
                <p className='mt-4 text-danger fw-bold'>New to TutorSpree? <span className='text-primary' onClick={navigateSignUp} style={{ cursor: 'pointer' }}>Please Register</span></p>

                <SocialLogin></SocialLogin>
            </Form>


        </div>
    );
};

export default Login;