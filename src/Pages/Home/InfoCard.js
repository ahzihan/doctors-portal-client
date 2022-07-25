import React from 'react';

const InfoCard = ( { img, cardTitle, bgClass } ) => {
    return (
        <div className={`card lg:pt-8 shadow-xl ${ bgClass }`}>
            <figure className='pt-10 lg:pt-0 lg:pl-5'>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body text-white">
                <h3 className="card-title lg:text-start">{cardTitle}</h3>
                <p className='lg:text-start'>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCard;