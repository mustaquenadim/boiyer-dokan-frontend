import React, { useState } from 'react';
import SideNav from '../SideNav/SideNav';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Add = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const handleUploadFile = event => {
        const imageData = new FormData();
        imageData.set('key', 'edae0002c27d9671e6fe41b4304098ef');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(response => setImageURL(response.data.data.display_url))
            .catch(error => console.log(error));
    }
    const onSubmit = data => {
        const bookData = { bookName: data.bookName, bookAuthor: data.bookAuthor, bookPrice: data.bookPrice, imageURL: imageURL };
        console.log(bookData);
        fetch('http://localhost:8000/addBook', {
            method: 'POST', 
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(bookData)
        })
        .then(res => { if (res) alert('Book added to the database successfully!') })
    };
    return (
        <div className='row' style={{height: '100vh'}}>
            <SideNav />
            <div className="col-lg-9">
                <div className='container'>
                    <h3>Add Book</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="p-3 rounded-3">
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="bookName" className="form-label">Book Name</label>
                                    <input type="text" className="form-control" id="bookName" placeholder="Enter Book Name" {...register("bookName", { required: true })} />
                                    {errors.bookName && <span className='text-danger'>This field is required</span>}
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="bookAuthor" className="form-label">Author Name</label>
                                    <input type="text" className="form-control" id="bookAuthor" placeholder="Enter Author Name" {...register("bookAuthor", { required: true })} />
                                    {errors.bookAuthor && <span className='text-danger'>This field is required</span>}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="bookPrice" className="form-label">Book Price</label>
                                    <input type="text" className="form-control" id="bookPrice" placeholder="Enter Book Price" {...register("bookPrice", { required: true })} />
                                    {errors.bookPrice && <span className='text-danger'>This field is required</span>}
                                </div>
                            </div>
                            <div className="col">
                            <label className="form-label">Add Book Cover Photo</label>
                                <div className="custom-file">
                                    <label htmlFor="bookCoverPhoto" className="custom-file-label">Upload Cover Photo</label>
                                    <input type="file" className="custom-file-input" onChange={handleUploadFile} id="bookCoverPhoto" />
                                </div>
                            </div>
                        </div>
                        <div className="text-end">
                            <button type="submit" className="btn btn-primary">
                                <FontAwesomeIcon icon={faPlus} /> Add Book
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Add;