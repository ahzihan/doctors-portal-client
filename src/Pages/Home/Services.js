import React from 'react';
import ServiceInfo from './ServiceInfo';
import cavity from '../../assets/images/cavity.png';
import fluoride from '../../assets/images/fluoride.png';
import whitening from '../../assets/images/whitening.png';
import treatment from '../../assets/images/treatment.png';

const Services = () => {
    const services = [
        { _id: 1, title: 'Fluoride Treatment', description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the', img: cavity },
        { _id: 2, title: 'Cavity Filling', description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the', img: fluoride },
        { _id: 3, title: 'Teeth Whitening', description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the', img: whitening }
    ];
    return (
        <div className='my-28'>
            <h3 className='text-center text-xl text-secondary uppercase font-bold'>Our Services</h3>
            <h2 className='text-center text-4xl'>Services We Provide</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12 py-5'>
                {
                    services.map( service => <ServiceInfo key={service._id} service={service}></ServiceInfo> )
                }
            </div>
            <div class="hero px-12 mt-28">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" alt='Image' />
                    <div className='ml-6'>
                        <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p class="py-6 w-3/4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button class="btn bg-gradient-to-r from-secondary to-primary uppercase text-white font-bold border-0">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;