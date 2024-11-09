
import React from 'react';

const Book = ({ book }) => {

    const { bookId, author,bookName,category } = book;

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                {bookName}
                    <div className="badge badge-secondary">{category}</div>
                </h2>
                <p>By: <span className='text-slate-500'>{author}</span></p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default Book;