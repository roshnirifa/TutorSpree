import React from 'react';
import { Carousel } from 'react-bootstrap';
import img from '../Banner/img/Female Teacher during a Math Class.webp'
import img1 from '../Banner/img/Students Writing on Board.webp'
import './Banner.css'

const Banner = () => {
    return (

        <div className='d-flex container mt-5 bg-light'>
            <div className="welcome  ">
                <h1 className='title my-5'>Welcome to Tutor<span style={{ color: 'orange' }}>Spree</span></h1>
                <p>If you’re searching for a Math Tutor who can provide you with the personalized attention you deserve, look no further! I am a knowledgeable private teacher with many years of experience, and have been offering my services as a Math Tutor since 2000 in the greater San Francisco area. I can help unlock your full potential by providing the one-on-one attention you need in order to succeed.</p>
            </div>
            <div>
                <img className='img' src={img} alt="" />
            </div>
        </div>

    );
};

export default Banner;