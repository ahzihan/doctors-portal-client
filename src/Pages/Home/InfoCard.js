import React from 'react';

const InfoCard = ( { img, cardTitle, bgClass } ) => {
    return (
        <div className={`card lg:card-side shadow-xl ${ bgClass }`}>
            <figure className='pt-10 lg:pt-0 lg:pl-5'>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-titlelg:text-start">{cardTitle}</h2>
                <p className='lg:text-start'>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCard;