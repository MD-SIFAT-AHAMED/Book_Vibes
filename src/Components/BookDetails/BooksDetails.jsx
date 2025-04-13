import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredReadList, addToStoredWishList } from '../../Utilits/addToDb';

const BooksDetails = () => {

    const {bookId} = useParams();
    const data = useLoaderData()

    const book = data.find( data => data.bookId === parseInt(bookId));

    const {image,bookName,totalPages,publisher,author,category,tags,rating,review,yearOfPublishing}=book;
    
    const handlerReadBook =(id)=>{
        addToStoredReadList(id);
    }
    
    const handlerWishBook=(id)=>{
        addToStoredWishList(id);
    }


    return (
        <div className="hero bg-base-200 min-h-screen p-5">
            <div className="hero-content flex-col lg:flex-row">
                <img
                src={image}
                className="h-[600px] p-19 rounded-lg bg-[#13131310] " />
                <div>
                    <h1 className="text-5xl font-bold ">{bookName}</h1>
                    <p className='mt-4'>By: {author}</p>
                    <hr className='text-gray-400 my-2' />
                    <p>{category}</p>
                    <hr className='text-gray-400 my-2' />
                    <p className="py-4"><span>Review:</span>{review}</p>
                    <div>
                        <span>Tag:</span>
                        {
                            
                            tags.map((tag,index) => <p key={index} className='inline mr-3 p-2 bg-[#23BE0A10] rounded-2xl font-medium text-[#23BE0A]'>{tag}</p>)
                        }
                    </div>
                    <hr className='text-gray-400 my-5' />
                    <div className='flex '>
                        <div className='space-y-2'>
                            <p>Name of Pages: </p>
                            <p>Publisher: </p>
                            <p>Year of Publihing: </p>
                            <p>Rating: </p>
                        </div>
                        <div className='ml-20 space-y-2 font-semibold'>
                            <p>{publisher}</p>
                            <p>{totalPages}</p>
                            <p>{yearOfPublishing}</p>
                            <p>{rating}</p>
                        </div>
                    </div>
                    <div className='mt-4 space-x-2'>
                        <button onClick={()=> handlerReadBook(bookId)} className="btn p-6 rounded-xl">Read</button>
                        <button onClick={()=> handlerWishBook(bookId)} className="btn p-6 rounded-xl bg-[#50B1C9]">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BooksDetails;