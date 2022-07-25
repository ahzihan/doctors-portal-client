import React from "react";

const TestimonialCard = ( { author } ) => {
  const { title, city, img } = author;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
      </div>
      <div className="flex justify-start items-center pt-4 lg:pt-0 pl-6 pb-4">
        <figure className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={img} alt="Album" />
        </figure>
        <div className="ml-4">
          <h2 className="card-title">{title}</h2>
          <p>{city}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
