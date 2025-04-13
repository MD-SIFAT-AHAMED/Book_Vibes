import React from 'react';
import { Link } from 'react-router';

const Book = ({book}) => {
    const{bookId,bookName,author,image,tags}=book;
    return (
        <Link to={`/book/${bookId}`}>
            <div className="card bg-base-100 w-96 border-1 border-gray-400 rounded-2xl shadow-sm p-6">
                <figure className='bg-[#F3F3F3] rounded-2xl'>
                    <img 
                    className='h-[166px] my-8'
                    src={image}
                    alt={author} />
                </figure>
                <div className="card-body">
                    <div className=''>
                        {
                            tags.map((tag,index) => <p key={index} className='inline mr-3 p-2 bg-[#23BE0A10] rounded-2xl font-medium text-[#23BE0A]'>{tag}</p>)
                        }
                    </div>
                    <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">New</div>
                    </h2>
                    <p className='text-base'>By: {author}</p>
                    <div className='border-t-1 border-gray-400 border-dashed'></div>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">Fiction</div>
                        <div className="rating ">
                            <input className="mask mask-star-2 bg-green-500" aria-label="1 star" />
                            <input className="mask mask-star-2 bg-green-500" aria-label="2 star" />
                            <input className="mask mask-star-2 bg-green-500" aria-label="3 star" />
                            <input className="mask mask-star-2 bg-green-500" aria-label="4 star" />
                            <input className="mask mask-star-2 bg-green-500" aria-label="5 star" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;