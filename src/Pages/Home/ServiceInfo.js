import React from 'react';

const ServiceInfo = ( { service } ) => {
    const { title, description, img } = service;
    return (
        <div class="card bg-base-100 shadow-xl mt-5">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ServiceInfo;