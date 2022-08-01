import React from 'react';

const AppointmentCard = ( { service, setTreatment } ) => {
    const { name, slots, price } = service;
    return (

        <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-xl font-bold text-secondary">{name}</h2>
                <p>{slots.length > 0 ? <span>{slots[ 0 ]}</span> : <span className='text-red-500'>Slot is not available</span>}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <p><small>Price: ${price}</small></p>
                <div className="card-actions justify-center">
                    <label onClick={() => setTreatment( service )} disabled={slots.length === 0} htmlFor="booking-modal" className="btn btn-sm bg-gradient-to-r from-secondary to-primary uppercase text-white font-bold border-0">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;