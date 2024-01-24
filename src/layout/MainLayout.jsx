import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../component/NavBar';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    return (
        <div>
          <ToastContainer></ToastContainer>
          <NavBar></NavBar>
          <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;