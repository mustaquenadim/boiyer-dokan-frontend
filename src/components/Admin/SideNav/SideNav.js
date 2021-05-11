import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faFolderPlus, faTasks } from '@fortawesome/free-solid-svg-icons';

const SideNav = () => {
    return (
        <div style={{height: '100vh'}} className='col-lg-3 bg-light'>
            <Link to='/' style={{textDecoration: 'none', color: 'green'}}><h3  className='text-center'>Boiyer<br/>Dokan</h3></Link>
            <ul className='list-group list-group-flush'>
                <Link className="list-group-item list-group-item-action text-dark" style={{textDecoration: 'none'}} to='/admin/manage'>
                    <FontAwesomeIcon icon={faTasks} /> Manage Books
                </Link>
                <Link className="list-group-item list-group-item-action text-dark" style={{textDecoration: 'none'}} to='/admin/add'>
                    <FontAwesomeIcon icon={faFolderPlus} /> Add Book
                </Link>
                <Link className="list-group-item list-group-item-action text-dark" style={{textDecoration: 'none'}} to='/admin/edit'>
                    <FontAwesomeIcon icon={faEdit} /> Edit Book
                </Link>
            </ul>
        </div>
    );
};

export default SideNav;