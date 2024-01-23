import React from 'react';
import NavBar from '../component/NavBar';
import bg1 from "../assets/images/bg-1.jpg"

const HomeLayout = () => {
    return (
      <div
        className="h-svh"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className='bg-black bg-opacity-50 py-4 my-auto'>
          <h1 className="text-2xl text-white text-center font-bold">
            "Unlocking Your Dream Home: Your Key to a Better Future with
            HouseHunter!"
          </h1>
        </div>
      </div>
    );
};

export default HomeLayout;