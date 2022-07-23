import React from 'react';
import MakeAppoinment from './MakeAppoinment';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import Testimonial from './Testimonial';
import Contact from './Contact';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppoinment></MakeAppoinment>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;