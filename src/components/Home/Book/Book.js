import React from 'react';
import { Link } from 'react-router-dom';

const Book = (props) => {
    const { _id, bookName, bookAuthor, bookPrice, imageURL} = props.book;
    return (
        <div className="col-lg-4">
            <div className="card h-100 p-3 bg-warning border-0 shadow">
                <img src={imageURL} className="card-img-top book-cover" alt="Book Cover"/>
                <div className="card-body">
                    <h5 className="card-title fw-bold text-danger">{bookName}</h5>
                    <p className="card-text">{bookAuthor}</p>
                </div>
                <div className="card-footer border-0 bg-transparent">
                    <div className="row">
                        <div className="col fs-4 fw-bold">${bookPrice}</div>
                        <div className="col">
                            <Link to={`/checkout/${_id}`} className="btn btn-success">Buy Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;