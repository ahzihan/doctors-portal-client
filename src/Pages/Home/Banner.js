import React from 'react';
import chair from '../../assets/images/chair.png';
import PrimaryButton from '../Shared/PrimaryButton';
import bg from '../../assets/images/bg.png';
import Info from './Info';

const Banner = () => {
    return (
        <section style={{ background: `url(${ bg })`, backgroundSize: 'cover' }}>
            <div className="hero py-6 lg:py-12">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="lg:max-w-sm rounded-lg shadow-2xl" alt='banner' />
                    <div className='mt-10 lg:mt-0'>
                        <h1 className="text-3xl lg:text-4xl font-bold">Your New Smile Status Here</h1>
                        <p className="py-6 lg:w-3/4">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
            <Info></Info>
        </section>
    );
};

export default Banner;