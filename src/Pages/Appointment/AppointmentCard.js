import React from 'react';

const AppointmentCard = ( { service, setTreatment } ) => {
    const { name, slots } = service;
    return (

        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body text-center">
                <h2 class="text-xl font-bold text-secondary">{name}</h2>
                <p>{slots.length > 0 ? <span>{slots[ 0 ]}</span> : <span className='text-red-500'>Slot is not available</span>}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div class="card-actions justify-center">
                    <label onClick={() => setTreatment( service )} disabled={slots.length === 0} for="booking-modal" class="btn bg-gradient-to-r from-secondary to-primary uppercase text-white font-bold border-0">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;