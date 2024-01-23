import React from 'react';
import { FaLocationDot } from "react-icons/fa6";

const HouseCard = ({data}) => {
    const { images, location, title, price, description } = data;
    return (
      <div>
        <div className="card w-96 bg-base-100 shadow-xl h-[450px]">
          <figure className="relative">
            <img src={data.images[0]} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="absolute right-0">
            <h2 className="bg-white shadow-xl px-2 py-1 rounded font-bold">
              {price}
            </h2>
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <p className='flex items-center gap-2 font-bold'>
              <FaLocationDot /> {data.location.city},{" "} {data.location.state},{" "}
              {data.location.zipcode}
            </p>
            <div className="card-actions mt-4">
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HouseCard;