import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Doctors from '../Doctors/Doctors';
import Emergency from '../Emergency/Emergency';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Testimonial></Testimonial>
            <Services></Services>
            <Doctors></Doctors>
            <Emergency></Emergency>
        </div>
    );
};

export default Home; <Banner></Banner>