import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { useQuery } from 'react-query';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe( 'pk_test_51LRsdMF5KgJvVVYzb13wfDmC04ervS9MIC3fPtO3BSIuojuUTDW9ptxWR4C9qzNFZmd7irpHiCJwkBZbnIAPOKxS00fdTB2Jv5' );
const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${ id }`;
    const { data: appointment, isLoading } = useQuery( [ 'booking', id ], () => fetch( url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${ localStorage.getItem( 'accessToken' ) }`
        }
    } ).then( res => res.json() ) );

    if ( isLoading ) {
        return <Loading></Loading>;
    }

    return (
        <div className='mt-5'>
            <div class="card w-3/4 mx-auto bg-base-100 shadow-xl mb-3">
                <div class="card-body">
                    <p className='text-success font-bold'>Hello, {appointment.patientName}</p>
                    <h2 class="card-title">Please Pay for : <span className='text-orange-700'>{appointment.treatment}</span></h2>
                    <p><small>Your Appointment on <span className='text-orange-700'>{appointment.date}</span> at <span className='text-orange-700'>{appointment.slot}</span></small></p>
                    <p>Please, Pay : ${appointment.price}</p>
                </div>
            </div>
            <div class="card w-3/4 mx-auto bg-base-100 shadow-xl mb-3">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;