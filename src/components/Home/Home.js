import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Book from './Book/Book';

const Home = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/books')
            .then((res) => res.json())
            .then((data) => setBooks(data));
    }, []);
    return (
        <div>
            <Header />
            <div className='container py-3'>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Search" aria-label="search" aria-describedby="search-btn" />
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" id="search-btn">Search</button>
                    </div>
                </div>
                <div className='row g-4'>
                    {books.length === 0 && (
                        <div className='d-flex justify-content-center'>
                            <div className='sr-only' role='status'>
                                <span className='visually-hidden'>Loading...</span>
                            </div>
                        </div>
                    )}
                    {books.map((book) => (
                        <Book key={book._id} book={book}></Book>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;