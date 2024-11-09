
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

            {
                books.map(book => <Book key={book.bookId} book={book}></Book>)
            }
        </div>
    );
};

export default Books;