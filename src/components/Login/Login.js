import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from './firebase.config';
import FireAuth from './FireAuth';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } };
    if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
    const onSubmit = data => {
        console.log(data);
        const {email, password} = data;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((response) => {
                console.log(response.user);
                setLoggedInUser(response.user);
                history.replace(from);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className='border p-4' style={{width: '450px'}}>
                <h3>Login</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type='email' className='form-control' id='email' placeholder='Enter your email' {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
                        {errors.email && <span className='text-danger'>Please enter a valid email</span>}
                    </div>
                    <div className="form-group">
                        <input type='password' className='form-control' id='password' placeholder='Enter your password' {...register("password", { required: true, minLength: 6 })} />
                        {errors.password && <span className='text-danger'>This field is required</span>}
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className='form-check-input' id="rememberMe"/>
                        <label className='form-check-label' htmlFor="rememberMe">Remember Me</label>
                    </div>
                    <p>Forgot Password?</p>
                    <button type="submit" className='btn btn-primary w-100'>Login</button>
                    <p className='text-center'>Don't have an account? <Link to='/signUp'>Create an account</Link></p>
                </form>
                <FireAuth />
            </div>
        </div>
    );
};

export default Login;