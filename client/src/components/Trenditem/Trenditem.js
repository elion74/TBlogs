import React from 'react';


import * as trenditemstyle from './trenditem.module.css';
import 'semantic-ui-css/semantic.min.css';


export default function Trenditem(props) {

return(
    <div className = {trenditemstyle.trenditem}>
        <p className = {trenditemstyle.rank}>{props.rank}</p>
    <div> 
        <div  className = {trenditemstyle.articleinfo}>
            <p className = {trenditemstyle.creator}>{props.user}</p>
            <p className = {trenditemstyle.title}>{props.title}</p>
        </div>

        <div className = {trenditemstyle.likes}>
            <p className = {trenditemstyle.likeamount}> {props.likes} <i class="heart icon"></i></p>
        </div>  
    </div>

    </div>
);
}