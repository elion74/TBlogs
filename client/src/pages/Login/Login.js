import React from 'react';
import bgimg from '../../assets/tech-dots.jpg';
import * as loginstyle from './login.module.css';

export default function Login (){

return(

    <div>
        <img src = {bgimg} className = {loginstyle.bgimg}/>
    </div>
);
}