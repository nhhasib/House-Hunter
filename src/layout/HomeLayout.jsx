import React from 'react';
import NavBar from '../component/NavBar';
import bg1 from "../assets/images/bg-1.jpg"
import { Bounce, ToastContainer } from 'react-toastify';

const HomeLayout = () => {
    return (
      <div
        className="h-svh py-60"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className='bg-black bg-opacity-50 py-4 relative'>
          <h1 className="text-2xl text-white text-center font-bold">
            "Unlocking Your Dream Home: Your Key to a Better Future with
            HouseHunter!"
          </h1>
        </div>
      </div>
    );
};

export default HomeLayout;