import React from 'react';
import chair from '../../assets/images/chair.png';

const Banner = () => {
    return (
        <div class="hero py-5">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt='banner' />
                <div>
                    <h1 class="text-5xl font-bold">Your New Smile Status Here</h1>
                    <p class="py-6 w-3/4">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn bg-gradient-to-r from-secondary to-primary uppercase text-white font-bold border-0">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;