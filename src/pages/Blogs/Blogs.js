import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>

            <h2> Difference between authorization and authentication?</h2>
            <p>Authorization: If someone wants to login or signup by using other existing resources like facebook, instagram, twitter, google account etc authorization give access to user by clicking any third party app. </p>

            <p>Authentication: Someones or somethings act or their given information worng or right are implentended by authentication . </p>


            <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p>I am using firebase for authentication for my web application like login and signin method. </p>
            <p>Except firebase there so many authorizations provider like laravel Authentication, RUST authentication and Django.</p>

            <h2>What other services does firebase provide other than authentication

            </h2>
            <p>Firebase provide the 1.database <br />
                2.Cloud Firestore. <br />
                3.Cloud Functions. <br />
                4.Authentication. <br />
                5. Hosting. <br />
                6.Cloud Storage. <br />
                7.Google Analytics. <br />
                8.Predictions. <br />
                9.Cloud Messaging
            </p>

        </div>
    );
};

export default Blogs;