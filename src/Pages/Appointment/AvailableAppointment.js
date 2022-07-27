import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AppointmentCard from './AppointmentCard';
import BookingModal from './BookingModal';

const AvailableAppointment = ( { date } ) => {
    // const [ services, setServices ] = useState( [] );
    const [ treatment, setTreatment ] = useState( null );

    const formattedDate = format( date, 'PP' );
    const { data: services, isLoading, refetch } = useQuery( [ 'available', formattedDate ], () =>
        fetch( `http://localhost:5000/available?date=${ formattedDate }` )
            .then( res => res.json() )
    );
    if ( isLoading ) {
        return <Loading></Loading>;
    }

    console.log( services );
    // useEffect( () => {
    //     fetch( `http://localhost:5000/available?date=${ formattedDate }` )
    //         .then( res => res.json() )
    //         .then( data => setServices( data ) );
    // }, [formattedDate] );

    return (
        <div className='py-6 lg:py-12'>
            <h3 className='text-secondary font-bold text-center text-2xl'>Available Appointments On {format( date, 'PP' )}</h3>
            <p className='text-center py-3 lg:py-5'>Please, Select a services.</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-5'>
                {
                    services?.map( service => <AppointmentCard key={service._id} service={service} setTreatment={setTreatment}></AppointmentCard> )
                }
            </div>
            {treatment && <BookingModal refetch={refetch} date={date} treatment={treatment} setTreatment={setTreatment}></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;