import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Add from './components/Admin/Add/Add';
import Edit from './components/Admin/Edit/Edit';
import Manage from './components/Admin/Manage/Manage';
import Checkout from './components/Checkout/Checkout';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import NoMatch from './components/NoMatch/NoMatch';
import Orders from './components/Orders/Orders';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});
    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
                <Switch>
                <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/home'>
                        <Home />
                    </Route>
                    <PrivateRoute path='/orders'>
                        <Orders />
                    </PrivateRoute>
                    <PrivateRoute path='/admin/manage'>
                        <Manage />
                    </PrivateRoute>
                    <PrivateRoute path='/admin/add'>
                        <Add />
                    </PrivateRoute>
                    <PrivateRoute path='/admin/edit'>
                        <Edit />
                    </PrivateRoute>
                    <PrivateRoute path='/checkout/:_id'>
                        <Checkout />
                    </PrivateRoute>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route path='/signUp'>
                        <SignUp />
                    </Route>
                    <Route path='*'>
                        <NoMatch />
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
