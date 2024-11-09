
import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch(`./books.json`)
            .then(res => res.json())
            .then(data => setBooks(data))

    }, [])

    return (
        <div>
            <h2 className="text-5xl text-center mb-8">Books</h2>

            <div className='grid grid-cols-1 grid-rows-1 justify-between md:grid-cols-3 md:grid-rows-3 gap-16 mb-8'>
                {
                    books.map(book => <Book key={book.bookId} book={book} />)
                }
            </div>


        </div>
    );
};

export default Books;