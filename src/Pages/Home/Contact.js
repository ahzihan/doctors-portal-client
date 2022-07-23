import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import appointment from "../../assets/images/appointment.png";

const Contact = () => {
    return (
        <section style={{background: `url(${appointment})`}} className="my-6 py-8">
            <form className='lg:w-1/2 px-5 lg:px-0 mx-auto text-center'>
                <h3 className="text-secondary text-center text-xl uppercase font-bold">Contact Us</h3>
                <h2 class="text-3xl text-center lg:text-4xl py-4 text-white font-bold">Stay connected with us</h2>
                <input className='mb-3 w-full input input-bordered bg-white' type="email" name="email" placeholder='Email' /><br/>
                <input className='mb-3 w-full input input-bordered bg-white' type="text" name="subject" placeholder='Subject' /><br/>
                <textarea placeholder='Message' className='mb-3 w-full input input-bordered bg-white' name='message' cols="" rows="5"></textarea><br/>
                <PrimaryButton>Send</PrimaryButton>
            </form>
        </section>
    );
};

export default Contact;
