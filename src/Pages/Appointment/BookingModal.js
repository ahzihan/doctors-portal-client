import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';

const BookingModal = ( { treatment, date, setTreatment } ) => {
    const { _id, name, slots } = treatment;
    const [ user, loading ] = useAuthState( auth );

    if ( loading ) {
        return <Loading></Loading>;
    }
    const handleBooking = event => {
        event.preventDefault();
        const formattedDate = format( date, 'PP' );
        const slot = event.target.slot.value;
        const booking = {
            treatmentId: _id,
            date: formattedDate,
            slot,
            treatment: name,
            email: user.email,
            phone: event.target.phone.value,
            patientName: user.displayName
        };
        fetch( 'http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify( booking )
        } )
            .then( res => res.json() )
            .then( data => {
                console.log( data );
                if ( data.success ) {
                    toast( `Appointment is set, ${ formattedDate } at ${ slot }` );
                }
                else {
                    toast.error( `Already have an Appointment on, ${ data.info?.date } at ${ data.info?.slot }` );
                }
                setTreatment( null );
            } );


    };
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl font-bold text-secondary">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5 mt-5'>
                        <input className='w-full input input-secondary bg-white' type="text" name="date" value={format( date, 'PP' )} disabled />
                        <select name='slot' className="select select-secondary w-full bg-white">
                            {
                                slots.map( ( slot, index ) => <option key={index} value={slot}>{slot}</option> )
                            }
                        </select>
                        <input className='w-full input input-secondary bg-white' type="text" name="name" value={user?.displayName || ''} disabled />
                        <input className='w-full input input-secondary bg-white' type="text" name="phone" placeholder='Phone Number' required />
                        <input className='w-full input input-secondary bg-white' type="text" name="email" value={user?.email || ''} disabled />
                        <input className='btn bg-gradient-to-r from-secondary to-primary uppercase text-white font-bold border-0 w-full' type="submit" value='Booking Now' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;