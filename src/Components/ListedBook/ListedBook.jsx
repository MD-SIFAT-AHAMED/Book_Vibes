import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadtList, getStoredWishList } from '../../Utilits/addToDb';
import Book from '../Book/Book';

const ListedBook = () => {
    const allBook = useLoaderData();
    const [readList,setReadList]= useState([]);
    const [wishList,setWishList]= useState([]);

    useEffect(()=>{
        const storedReadList = getStoredReadtList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        const readBookList = allBook.filter(book => storedReadListInt.includes(book.bookId));
        setReadList(readBookList);
    },[])

    useEffect(()=>{
        const storedWishList = getStoredWishList();
        const storedWishListInt = storedWishList.map(id => parseInt(id));
        const wishListBook = allBook.filter( book => storedWishListInt.includes(book.bookId));
        setWishList(wishListBook);
    },[])

    return (
        <div className='my-5'>
           <div className='p-5 bg-[#F3F3F3] rounded-2xl text-center my-7'>
                <p className='text-2xl font-semibold'>Books</p>
           </div>
            <Tabs>
                <TabList>
                <Tab>Read Books</Tab>
                <Tab>WishList Book</Tab>
                </TabList>

                <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center'>
                    {
                        readList.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center'>
                    {
                        wishList.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBook;