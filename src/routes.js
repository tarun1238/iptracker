import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './HomePage'
import Login from './Reg'
import './App.css';

 const AppRoutes=()=> {
    return(
        <Switch>
         <Route exact path='/' component={HomePage} />
         <Route exact path='/login' component={Login} />
        </Switch>
    )
}

export default AppRoutes