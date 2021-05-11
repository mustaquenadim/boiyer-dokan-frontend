import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <Link className="navbar-brand" to='/'>Boiyer Dokan</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0 text-center">
                        <li className="nav-item">
                            <Link className="nav-link active px-3" aria-current="page" to='/home'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link px-3" to='/orders'>Orders</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link px-3" to='/admin/manage'>Admin</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link px-3" to='/checkout'>Checkout</Link>
                        </li>
                        {loggedInUser.photo ? (
                            <li className="nav-item">
                                <img style={{height: '35px', width: '35px', borderRadius: '50%'}} src={loggedInUser.photo} alt={loggedInUser.name} />
                            </li>
                        ) : (
                            <li className="nav-item">
                                <Link className="nav-link px-3" to='/login'>Login</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;