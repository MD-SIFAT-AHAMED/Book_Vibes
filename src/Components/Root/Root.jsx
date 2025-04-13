import React from 'react';
import NabVar from '../Navbar/NabVar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <NabVar></NabVar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;