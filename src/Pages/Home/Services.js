import React from 'react';
import ServiceInfo from './ServiceInfo';
import cavity from '../../assets/images/cavity.png';
import fluoride from '../../assets/images/fluoride.png';
import whitening from '../../assets/images/whitening.png';
import treatment from '../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Services = () => {
    const services = [
        { _id: 1, title: 'Fluoride Treatment', description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the', img: cavity },
        { _id: 2, title: 'Cavity Filling', description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the', img: fluoride },
        { _id: 3, title: 'Teeth Whitening', description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the', img: whitening }
    ];
    return (
        <div className='my-14 lg:my-28'>
            <h3 className='text-center text-xl text-secondary uppercase font-bold'>Our Services</h3>
            <h2 className='text-center text-4xl'>Services We Provide</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 py-5'>
                {
                    services.map( service => <ServiceInfo key={service._id} service={service}></ServiceInfo> )
                }
            </div>
            <div className="hero mt-12 lg:mt-28">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" alt='Image' />
                    <div className='lg:ml-28'>
                        <h1 className="text-3xl lg:text-4xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6 lg:w-3/4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;