import React from 'react';
import MakeAppoinment from './MakeAppoinment';
import Banner from './Banner';
import Services from './Services';
import Testimonial from './Testimonial';
import Contact from './Contact';
import Footer from '../Shared/Footer';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <MakeAppoinment></MakeAppoinment>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;