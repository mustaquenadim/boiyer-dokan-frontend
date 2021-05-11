import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [loggedInUser.email]);
    return (
        <div>
            <Header />
            <div className='container'>
                <h1>Orders ({orders.length})</h1>
                <div>
                    <h4>Name: {loggedInUser.name}</h4>
                    <h5>Email: {loggedInUser.email}</h5>
                </div>
                <table class="table table-hover text-center">
                    <thead>
                        <tr>
                            <th scope='col'>Book</th>
                            <th scope='col'>Author</th>
                            <th scope='col'>Price</th>
                            <th scope='col'>Order Time</th>
                        </tr>
                    </thead>
                    <tbody>
                    {orders.map((order) => (
                        <tr>
                            <th scope='row'>{order.bookName}</th>
                            <td>{order.bookAuthor}</td>
                            <td>${order.bookPrice}</td>
                            <td>{order.dateTime}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                {orders.length === 0 && (
                    <div className='d-flex justify-content-center'>
                        <div className='spinner-border' role='status'>
                            <span className='sr-only'>Loading...</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Orders;