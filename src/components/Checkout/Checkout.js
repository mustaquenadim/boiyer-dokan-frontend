import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Deals = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { _id } = useParams();
    const [book, setBook] = useState([]);
    const dateTime = moment().format('LLL');

    useEffect(() => {
        fetch('http://localhost:8000/books')
            .then((res) => res.json())
            .then((data) => {
                const info = data.filter((book) => _id == book._id);
                setBook(info[0]);
            });
    }, [_id]);

    const handleOrder = () => {
        const {bookName, bookAuthor, bookPrice, imageURL} = book;
        const newOrder = { ...loggedInUser, bookName, bookAuthor, bookPrice, imageURL, dateTime };
        fetch('http://localhost:8000/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder),
        })
            .then(res => res.json())
            .then(data => {
                alert('Your order has been placed successfully!')
            });
    };
    return (
        <div>
            <Header />
            <div className='container py-3'>
                <h1>Checkout</h1>
                <h5>Date & Time: {dateTime}</h5>
                {book.length === 0 && (
                    <div className='d-flex justify-content-center'>
                        <div className='spinner-grow' role='status'>
                            <span className='sr-only'>Loading...</span>
                        </div>
                    </div>
                )}
                <div className='card mb-3 p-3 bg-warning border-0'>
                    <div className='row g-0'>
                        <div className='col-md-4'>
                            <img src={book.imageURL} alt='Book Cover' className='w-100 book-cover' />
                        </div>
                        <div className='col-md-8'>
                            <div className='card-body'>
                                <h4 className='card-title fw-bold text-danger'>{book.bookName}</h4>
                                <p className='card-text'>{book.bookAuthor}</p>
                                <p className='card-text fs-4 fw-bold'>${book.bookPrice}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-end">
                    <button className='btn btn-primary' onClick={handleOrder}>
                        <FontAwesomeIcon icon={faCartPlus} /> Place Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Deals;