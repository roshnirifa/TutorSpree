import React from 'react';
import img from '../About/img/IMG-20200213-WA0093.jpg';
import './About.css'

const About = () => {
    return (
        <div className='d-flex container mt-5 bg-light'>
            <div className="welcome ">
                <h1 className='title my-5'> I'm Roshni Rifa</h1>
                <p>
                    After my Hsc exam I set my goal which a web developer.
                    Since I am a CSE backgroud student so i can easily fulfill my wish. For becoming a web developer I work hard all day.
                    I beleive that one day I can become a Web Devoloper.

                </p>
            </div>
            <div>
                <img className='photo' src={img} alt="" />
            </div>
        </div>
    );
};

export default About;