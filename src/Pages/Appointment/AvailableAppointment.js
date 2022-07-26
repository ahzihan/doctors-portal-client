import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentCard from './AppointmentCard';
import BookingModal from './BookingModal';

const AvailableAppointment = ( { date, setDate } ) => {
    const [ treatment, setTreatment ] = useState( null );
    const [ services, setServices ] = useState( [] );
    const formatedDate = format( date, 'PP' );
    useEffect( () => {
        fetch( `http://localhost:5000/available?date=${ formatedDate }` )
            .then( res => res.json() )
            .then( data => setServices( data ) );
    }, [] );
    return (
        <div className='py-6 lg:py-12'>
            <h3 className='text-secondary font-bold text-center text-2xl'>Available Appointments On {format( date, 'PP' )}</h3>
            <p className='text-center py-3 lg:py-5'>Please, Select a services.</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-5'>
                {
                    services.map( service => <AppointmentCard key={service._id} service={service} setTreatment={setTreatment}></AppointmentCard> )
                }
            </div>
            {treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment}></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;