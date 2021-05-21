import React from 'react';
import { Link} from 'react-router-dom';
import {submitLogout} from '../../services/authService.js';
import * as  navbarstyle from './navbar.module.css';
import 'semantic-ui-css/semantic.min.css';
import { useHistory } from "react-router-dom";

export default function Navbar (){


    const history = useHistory();

  
return(
    <div className = {navbarstyle.navbar}>
        <p className ={navbarstyle.tblogs}>  <Link to = {'/home'} style={{ textDecoration: 'none', display: 'block', color:'white'}}>TBlogs</Link>  </p>
        <div className = {navbarstyle.icon}>  <Link to = {'/create'} style={{ textDecoration: 'none', display: 'block', color:'white'}}> <i class="huge pencil alternate icon"></i> </Link>  </div>
        <p className = {navbarstyle.myblogs}> <Link to = {'/myblog'} style={{ textDecoration: 'none', display: 'block', color:'white'}}>MY BLOGS</Link>  </p>
        <p className = {navbarstyle.logout} onClick = { () => submitLogout(history)}>Logout</p>
    </div>
);
}

