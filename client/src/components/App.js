import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import * as appstyle from './app.module.css';

import Navbar from './Navbar/Navbar.js';
import Navbarlogin from './Navbar/Navbarlogin/Navbarlogin.js';

import Login from '../pages/Login/Login.js';
import Home from '../pages/Home/Home.js';
import Article from '../pages/Article/Article.js';
import Create from '../pages/Create/Create.js';
import Update from '../pages/Update/Update.js';
import MyBlog from '../pages/MyBlog/MyBlog.js';
import Error from '../pages/Error.js';

export default function App(){


return(
    <div className = {appstyle.app}>
        <Router>
            { window.location.pathname === '/' ? 
                /* für login */
                <Navbarlogin/>
                : <Navbar /> 
                
            } 

           <Switch>
                <Route path = '/' exact component = {Login}/>
                <Route path = '/home' exact component = {Home}/>
                <Route path = '/articles' exact component = {Article}/>
                <Route path = '/create' exact component = {Create}/>
                <Route path = '/update' exact component = {Update}/>
                <Route path = '/myblog' exact component = {MyBlog}/>
                <Route  path = '*' component = {Error}/>
            </Switch>

        </Router>
    </div>
);
}
