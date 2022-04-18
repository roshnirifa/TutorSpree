import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase_init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [matchError, setMatchError] = useState()
    const emailRef = useRef('');
    const passRef = useRef('');
    const confirmPassRef = useRef('');
    const nameRef = useRef();
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, error1] = useUpdateProfile(auth);
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        const confirmPass = confirmPassRef.current.value;

        if (pass !== confirmPass) {
            setMatchError("your password didn't match")
            return;
        }
        if (pass.length < 6) {
            setMatchError("Your password shoud be 6 character long")
        }
        createUserWithEmailAndPassword(email, pass, confirmPass)
        // await updateProfile({ displayName: name });
        // alert('Updated profile');
        // navigate('/home')
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const navigateSignUp = () => {
        navigate('/login');
    }
    if (loading) {
        return <Loading></Loading>
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
                <Form.Group className="mb-3">
                    <Form.Control ref={confirmPassRef} type="password" placeholder="Confirm Password" required />
                </Form.Group>
                <p className='text-danger'>{matchError}</p>
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