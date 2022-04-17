import React from 'react';
import './Footer.css'
import { FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer '>
            <footer className='text-center fw-bold' >
                <div className="d-flex justify-content-center">
                    <h5 className='me-3'> <FaFacebook /></h5>
                    <h5 className='me-3'> <FaTwitter /></h5>
                    <h5> <FaGithub /></h5>
                </div>
                <p>Developed by Roshni Rifa</p>
                <p ><small>copyright @{(new Date().getFullYear())} </small></p>

            </footer>
        </div>
    );
};

export default Footer;