import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from './firebase.config';

const FireAuth = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } };
    if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig) }
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setLoggedInUser(signedInUser);
                history.replace(from);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }
    return (
        <div className='text-center'>
            <p>OR</p>
            <button className='btn btn-danger rounded-pill m-1' onClick={handleGoogleSignIn}>Continue with Google</button>
            <br/>
            <button className='btn btn-danger rounded-pill m-1' >Continue with Facebook</button>
        </div>
    );
};

export default FireAuth;