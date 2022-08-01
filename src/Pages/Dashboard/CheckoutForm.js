import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = ( { appointment } ) => {
    const stripe = useStripe();
    const elements = useElements();
    const [ cardError, setCardError ] = useState( '' );
    const [ clientSecret, setClientSecret ] = useState( '' );
    const [ success, setSuccess ] = useState( '' );
    const [ processing, setProcessing ] = useState( '' );
    const [ transactionID, setTransactionID ] = useState( '' );
    const { _id, price, email, patientName } = appointment;


    useEffect( () => {
        fetch( 'http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${ localStorage.getItem( 'accessToken' ) }`
            },
            body: JSON.stringify( { price } )
        } )
            .then( res => res.json() )
            .then( data => {
                if ( data?.clientSecret ) {
                    setClientSecret( data.clientSecret );
                }
            } );
    }, [ price ] );

    

    const handleSubmit = async ( event ) => {
        event.preventDefault();

        if ( !stripe || !elements ) {
            return;
        }
        const card = elements.getElement( CardElement );

        if ( card === null ) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod(
            {
                type: 'card',
                card
            }
        );
        setCardError( error?.message || '' );
        setSuccess( '' );
        setProcessing(true);

        //Confirm card payment

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: email
                    },
                },
            },
        );
        if ( intentError ) {
            setCardError( intentError?.message );
            setProcessing(false);
        } else {
            setCardError( '' );
            setTransactionID( paymentIntent.id );
            setSuccess( 'Congrats! Your payment is completed' );

            //Store payment info in database
            const payment={
                appointment: _id,
                transactionId: paymentIntent.id 
            }
            fetch(`http://localhost:5000/booking/${_id}`,{
                method:'PATCH',
                headers:{
                    'content-type': 'application/json',
                    authorization: `Bearer ${ localStorage.getItem( 'accessToken' ) }`
                },
                body: JSON.stringify(payment)
            }).then(res=>res.json()).then(data=>{
                setProcessing(false);
                console.log(data);
            })
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm btn-secondary mt-4' type="submit" disabled={!stripe || !clientSecret || success}>Pay</button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <div className='text-success'>
                    <p>{success}</p>
                    <p>Your Transaction Id: <span className='text-orange-500 font-bold'>{transactionID}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;