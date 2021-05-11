import React, { useEffect, useState } from 'react';
import SideNav from '../SideNav/SideNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';

const Manage = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/books')
            .then((res) => res.json())
            .then((data) => {
                setBooks(data);
            });
    });
    const handleDeleteBook = (id) => {
        fetch(`http://localhost:8000/deleteABook/${id}`, {method: 'DELETE'})
            .then((res) => {if (res) alert('Product Deleted Successfully!')})
    };
    return (
        <div className='row'>
            <SideNav />
            <div className="col-lg-9">
                <h1>Manage Books</h1>
                <div className='container py-3'>
                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th scope='col'>Sl. No.</th>
                                <th scope='col'>Book Name</th>
                                <th scope='col'>Author Name</th>
                                <th scope='col'>Price</th>
                                <th scope='col'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {books.map((book, index) => (
                            <tr>
                                <th scope='row'>{index + 1}</th>
                                <th>{book.bookName}</th>
                                <td>{book.bookAuthor}</td>
                                <td>${book.bookPrice}</td>
                                <td className="d-flex">
                                    <button className='btn btn-warning mx-1'><FontAwesomeIcon icon={faEdit} /></button>
                                    <button className='btn btn-danger mx-1' onClick={() => handleDeleteBook(book._id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Manage;