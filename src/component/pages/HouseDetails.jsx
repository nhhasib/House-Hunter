import React, { useState } from 'react';
import { FaCircleCheck } from 'react-icons/fa6';
import { useLoaderData } from 'react-router-dom';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const HouseDetails = () => {
const houseData=useLoaderData()

        const handleBooking=()=>(
            toast.success('Your booking is confirmed!'));
        
    return (
        <div>
           
           
           <div className="container mx-auto mt-8">
      <div className="bg-white p-8 shadow-md rounded-md text-xl">
        <h1 className="text-4xl font-bold mb-4">{houseData.title}</h1>
        <img
          src={houseData.images[0]}
          alt="House"
          className="w-full object-cover mb-4 rounded-md"
        />
        <div className="grid grid-cols-2 gap-4 mb-4">
          <img
            src={houseData.images[1]}
            alt="House 2"
            className="w-full h-48 object-cover rounded-md"
          />
          <img
            src={houseData.images[2]}
            alt="House 3"
            className="w-full h-48 object-cover rounded-md"
          />
          
        </div>
        <p className="text-gray-700 mb-4">
         {houseData.description}
        </p>
        <div className="flex justify-between mb-4">
          <div className='flex gap-4'>
            <p className="text-gray-600">Bedrooms: {houseData.bedrooms}</p>
            <p className="text-gray-600">Bathrooms: {houseData.bathrooms}</p>
          </div>
          <div>
            <p className="text-gray-600 text-4xl font-bold">Price: {houseData.price}</p>
          </div>
        </div>
       <div className="flex justify-between mb-4 items-center">
       <div>
            <h1 className='text-2xl'>Facilities:</h1>
            {houseData.amenities.map(i=><p className='flex gap-4 items-center'><FaCircleCheck /> {i}</p> )}
        </div>
        <div>
            <p className="text-gray-600">Location: {houseData.location.city}, {houseData.location.state}, {houseData.location.zipcode}</p>
          </div>
       </div>
        <div>
          <button onClick={()=>handleBooking()} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Book Now
          </button>
          
        </div>
        
      </div>
    </div>
    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    transition={Bounce}
    ></ToastContainer>
        </div>
    );
};

export default HouseDetails;