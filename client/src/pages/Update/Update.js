import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {sendUpdateddata} from '../../services/myblogService.js'

import * as updatestyle from './update.module.css';
 
export default function Update (props){
    

    const [id, setId] = useState(props.location.state.state);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [content, setContent] = useState('');

    const history = useHistory();

return(   
    <div className ={updatestyle.create}>
        <h1 className = {updatestyle.headline}>Update your Article</h1>
        
        <form className = {updatestyle.form}>
        
            <input type = 'text' name ='title' placeholder = 'title' className = {updatestyle.input}   autoComplete="off" onChange= {(e) => setTitle(e.target.value)}/>
            <input type = 'text' name = 'description' placeholder = 'description' className = {updatestyle.input}   autoComplete="off" onChange= {(e) => setDesc(e.target.value)}/>

            <textarea name="content" placeholder = 'content' rows="4" cols="50" className = {updatestyle.content} onChange= {(e) => setContent(e.target.value)}></textarea>
            
            <input name = 'submit' type = 'submit' value = 'Update' className = {updatestyle.input} autoComplete="off" onClick = {() => sendUpdateddata(title, desc, content, id, history)}/> 
        </form>
    </div>
);
}


