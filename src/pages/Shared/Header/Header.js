import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Headre.css'

const Header = () => {
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
                        <Link to='/Checkout'>CheckOut</Link>
                        <Link to='/contact'>Contact</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/link'>Login</Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;