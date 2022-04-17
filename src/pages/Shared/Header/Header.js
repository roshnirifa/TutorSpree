import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase_init';
import './Headre.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <Navbar collapseOnSelect expand="lg" className='bg-light navbar'>
            <Container>
                <Link to={"/"} className='site-title'> Tutor<span style={{ color: 'orange' }}>Spree</span></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className='ms-auto '>
                        <Link to='/home'> Home</Link>
                        <Link to='/services' >Services</Link>
                        <Link to='/blogs'>Blogs</Link>
                        <Link to='/checkout'>CheckOut</Link>
                        <Link to='/contact'>Contact</Link>
                        <Link to='/about'>About</Link>
                        {
                            user ? <Link onClick={handleSignOut} as={Link} to="/checkout" >Signout</Link>
                                :
                                <Link to='/login'>Login</Link>
                        }
                        <p> {user && user.email}</p>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;