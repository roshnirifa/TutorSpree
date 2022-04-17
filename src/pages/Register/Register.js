import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase_init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const nameRef = useRef();
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, error1] = useUpdateProfile(auth);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        await createUserWithEmailAndPassword(email, pass)
        await updateProfile({ displayName: name });
        alert('Updated profile');

    }
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (user) {
        navigate('/')
        console.log(user);
    }
    const navigateSignUp = () => {
        navigate('/login');
    }

    return (
        <div className='mx-auto box my-4'>
            <h2 className='text-center mt-3 text-primary'>Please SignUp!!!!!</h2>
            <Form onSubmit={handleSubmit} className=' m-5'>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={nameRef} type="name" placeholder="Enter name" required />

                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control ref={passRef} type="password" placeholder="Password" required />
                </Form.Group>
                <div className='text-center'>
                    <Button variant="primary" type="submit">
                        Signup
                    </Button> <br />
                </div>

                <p className='mt-4 text-danger fw-bold' >Already have an account? <span className='text-primary' onClick={navigateSignUp} style={{ cursor: 'pointer' }}>Please Login</span></p>

                <SocialLogin></SocialLogin>
            </Form>

        </div>
    );
};

export default Register;