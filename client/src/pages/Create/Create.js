import React from 'react';

import * as createstyle from './create.module.css';
 
export default function Create (props){

return(   
    <div className ={createstyle.create}>
        <h1 className = {createstyle.headline}>Write your Article</h1>
    
        <form className = {createstyle.form} encType="multipart/form-data" contenttype = "application/json" action="/post/create" method="post">
        
            <input type = 'text' name ='title' placeholder = 'title' className = {createstyle.input}   autoComplete="off"/>
            <input type = 'text' name = 'description' placeholder = 'description' className = {createstyle.input}   autoComplete="off"/>

                {/* hier input für img file */}
            <label for='postimage' className = {createstyle.labelfile}>Select a image</label>
            <input type='file' name='postimage' className = {createstyle.inputfile} multiple   autoComplete="off" />

            <textarea name="content" placeholder = 'content' rows="4" cols="50" className = {createstyle.content}></textarea>
        
        <div className = {createstyle.tagbox}>
            <input type = 'text' name = 'tag' placeholder = 'tag' className = {createstyle.tags} autoComplete="off"/>
            <input type = 'text' name = 'tag' placeholder = 'tag' className = {createstyle.tags} autoComplete="off"/>
            <input type = 'text' name = 'tag' placeholder = 'tag' className = {createstyle.tags} autoComplete="off"/>
            <input type = 'text' name = 'tag' placeholder = 'tag' className = {createstyle.tags} autoComplete="off"/>
        </div>
            
            <input  name = 'submit' type = 'submit' value = 'ADD' className = {createstyle.input} autoComplete="off"/> 
        </form>
    </div>
);
}


