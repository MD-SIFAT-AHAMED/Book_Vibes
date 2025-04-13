
import React from 'react';
import bannerImg from '../../assets/books.jpg';
import { Link } from 'react-router';
const Banner = () => {
    return (
        <div className="hero bg-base-200 h-[500px]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                src={bannerImg}
                className="max-w-sm rounded-lg shadow-2xl" />
                <div className='md:mr-20'>
                    <h1 className="text-4xl mb-7 font-bold capitalize">Books to freshen up <br /> your bookshelf</h1>
                    <Link to={'/listedBook'}>
                    <button className="btn btn-primary">View The List</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;