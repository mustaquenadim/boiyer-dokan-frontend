import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
    return (
        <div className='col-lg-3 bg-light'>
            <h3 className='text-center'>Boiyer<br/>Dokan</h3>
            <ul>
                <li><Link to='/admin/manage'>Manage Books</Link></li>
                <li><Link to='/admin/add'>Add Book</Link></li>
                <li><Link to='/admin/edit'>Edit Book</Link></li>
            </ul>
        </div>
    );
};

export default SideNav;