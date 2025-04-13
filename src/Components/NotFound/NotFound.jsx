import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className='text-center space-y-2'>
                <h1 className='text-3xl font-semibold'>Not Found This Page</h1>
                <p className='text-2xl'>404</p>
                <Link to={'/'}>
                    <button className='btn btn-primary'>Go to Home</button>
                </Link>
            </div>
        </div>

    );
};

export default NotFound;