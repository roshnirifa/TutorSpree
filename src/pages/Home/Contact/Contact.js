import React from 'react';

const Contact = () => {
    return (
        <div className=' mt-5 bg-light '>
            <div className="container d-flex justify-content-evenly mt-5 mb-5">
                <div className="contact-me pt-5">
                    <h1>Contact Me</h1>
                    <div>
                        <p>Address: Uttara Dhaka 1230</p>
                        <p>Email: roshnirifa998@gmail.com</p>
                        <p>Phone:01999965000</p>
                    </div>
                </div>
                <form action="">
                    <div className='py-5'>
                        <input className='me-2' type="text" name="text" id="" placeholder='name' />
                        <input type="email" name="text" id="" placeholder='email' />
                        <br /><br />
                        <input className='me-2' type="number" name="number" id="" placeholder=' number' />
                        <input type="text" name="text" id="" placeholder='address' /><br /> <br />
                        <input className='w-100' type="text" placeholder='subject' /><br /><br />
                        <input className='w-100' style={{ height: '150px' }} type="description" placeholder='Type Your meassage here....' />
                        <button className='btn btn-primary w-100 mt-4'>Submit</button>

                    </div>
                </form>
            </div>


        </div>

    );
};

export default Contact;