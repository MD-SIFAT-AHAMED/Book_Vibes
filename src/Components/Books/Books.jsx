import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books,setBooks] = useState([]);

    useEffect(()=>{
        fetch('Books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    },[])
    return (
        <div>
            <h2 className="text-3xl font-semibold text-center py-10">Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center'>
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;
