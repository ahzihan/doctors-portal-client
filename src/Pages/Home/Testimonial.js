import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import TestimonialCard from './TestimonialCard';


const Testimonial = () => {
    const authors = [
        { _id: 1, title: 'Winson Herry', city: "Dhaka", img: people1 },
        { _id: 2, title: 'Jenifar Herry', city: "Dhaka", img: people2 },
        { _id: 3, title: 'Kajal Kranti', city: "Dhaka", img: people3 }
    ];
    return (
        <section className='mt-8 py-8 lg:py-14'>
            <div className='flex justify-between'>
                <div className='flex-1 items-start'>
                    <h3 className='text-secondary text-md font-bold uppercase'>Testimonial</h3>
                    <h1 className='text-2xl lg:text-3xl'>What Our Patients Says</h1>
                </div>
                <div className='flex justify-end items-end'>
                    <img className='w-24 lg:w-48' src={quote} alt="quote" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-5'>
                {
                    authors.map( author => <TestimonialCard key={author._id} author={author}></TestimonialCard> )
                }
            </div>
        </section>
    );
};

export default Testimonial;