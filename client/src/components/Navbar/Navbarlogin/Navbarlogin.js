import React,  {useState} from 'react';
import { useHistory } from "react-router-dom";
import {submitSignup, submitLogin} from '../../../services/authService.js';
import Modal from '@material-ui/core/Modal';
import 'semantic-ui-css/semantic.min.css';

import * as navbarloginstyle from './navbarlogin.module.css';

function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

 
export default function Navbarlogin (){

    // damit nach login auf home page geschaltet wird
    const history = useHistory();

    const [modalStyle] = useState(getModalStyle);

    const [loginopen, setLoginOpen] = useState(false);
    const [signupopen, setSignupOpen] = useState(false);
    const [logindata, setLoginData] = useState({
        email:'',  
        password:'', 

    });
    const [signupdata, setSignupData] = useState({
        email:'', 
        username:'', 
        password:'', 
        age:null
    });




// Handlers

    const loginHandler = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setLoginData({
            ...logindata, 
            [name]:value
        });  

    }

    const signupHandler = (event) => {

        const name = event.target.name;
        const value = event.target.value;
        

        setSignupData({
            ...signupdata, 
            [name]:value
        });
    }
    
return(
<div className = {navbarloginstyle.navbar}>


        <p className = {navbarloginstyle.tblogs}>TBlogs</p>
        <button className = {navbarloginstyle.login} onClick = {() =>{ setLoginOpen(true) }}>LOGIN</button>
        <button className = {navbarloginstyle.signup} onClick = {() =>{setSignupOpen(true) }}>SIGN UP</button>

{/* Login Modal */}
        <Modal
        open={loginopen}
        >
        <div style = {modalStyle} className={navbarloginstyle.loginmodal}>
            <div className = {navbarloginstyle.loginmodalintro}>
                <h1>Welcome to TBlogs</h1>
                <i class="big link x icon" onClick = {() => setLoginOpen(false)}></i>
            </div>
            
            
            <div className = {navbarloginstyle.logininputs}>
                <input type = 'text' placeholder = 'email' name = 'email' className = {navbarloginstyle.logininput} onChange = {loginHandler} autoComplete="off"/>
                <input type ='password' placeholder = 'passwort' name = 'password' className = {navbarloginstyle.logininput} onChange = {loginHandler} autoComplete="off"/>

                <input type ='submit' value = 'login'  className = {navbarloginstyle.loginbutton} onClick = {() => { submitLogin( logindata.email, logindata.password, history) }} />
            </div>
        </div>

        </Modal>

{/* Signup Modal */}
        <Modal
        open={signupopen}
        >
         
        <div style = {modalStyle} className={navbarloginstyle.signupmodal}>
            <div className = {navbarloginstyle.signupmodalintro}>
                <h1>Welcome to TBlogs</h1>
                <i class="big link x icon" onClick = {() => setSignupOpen(false)}></i>
            </div>
            
            
            <div className = {navbarloginstyle.signupinputs}>
                <input type = 'text' placeholder = 'email' name = 'email' className = {navbarloginstyle.signupinput} onChange = {signupHandler} autoComplete="off"/>
                <input type = 'text' placeholder = 'username'  name = 'username' className = {navbarloginstyle.signupinput} onChange = {signupHandler} autoComplete="off"/>
                <input type ='password'  placeholder = 'passwort' name = 'password' className = {navbarloginstyle.signupinput} onChange = {signupHandler} autoComplete="off"/>
                <input type ='text'  placeholder= 'age' name = 'age' className = {navbarloginstyle.signupinput}   onChange = {signupHandler} />
                <label for = 'profile_pic' className = {navbarloginstyle.image_label}>Select a profile pic</label>
                <input type = 'file' name = 'profile_pic' className = {navbarloginstyle.image_select}/>

                <input type ='submit' value = 'signup'  className = {navbarloginstyle.signupbutton} onClick= {() => { submitSignup( signupdata.email,signupdata.username,signupdata.password, signupdata.age) }}/>
                
            </div>
        </div>

        </Modal>

</div>
);
}
   
