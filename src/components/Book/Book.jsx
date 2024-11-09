
import React from 'react';

const Book = ({book}) => {

    const {bookId,author} = book;

    return (
        <div>
            <h1>{author}</h1>
        </div>
    );
};

export default Book;