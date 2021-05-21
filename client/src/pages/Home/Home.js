import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import {getposts} from '../../services/homeService.js';

import * as homestyle from './home.module.css';

import Articleview from '../../components/Articleview/Articleview.js';
import Creators from '../../components/Creators/Creators.js';
import Trends from '../../components/Trends/Trends.js';



export default function Home (){

// state to keep track if backend allow to display content (because of auth)
    const [isauth, setIsAuth] = useState(null);
        
    const [articles, setArticles] = useState(null);

useEffect(() => {

    getposts(setArticles, setIsAuth);

}, []);


return( 
<div className = {homestyle.home}>  
         {isauth=== 401 ? <Redirect to = '*'/> :''}
        <div className = {homestyle.intro}>
        <p className ={homestyle.introtitle}>Welcome to TBlogs</p>
        <p className = {homestyle.introtext}>Here you can share your experience with Technology!</p>
        </div>
     
    <div className = {homestyle.homebody}>   

         <div className = {homestyle.articles}>
            {/* soll nur rendern wenn articles state voll ist */}
            { articles ?
                
                articles.data.map((article) => (
                                      
                 <Articleview key = {article._id} id = {article._id} img_src = {btoa(String.fromCharCode(...new Uint8Array(article.image.img.data)))} img_type = {article.image.contentType} username = {article.user} likes = {article.likes} title ={article.title} description ={article.description} content = {article.content} tags = {article.tags}/>         
                ))
            
            : ''
            }

            <Trends /> 
        </div>

        <div className = {homestyle.creators}>
            <Creators />
        </div>

    </div>
</div>
);
}

