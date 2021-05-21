import React, {useEffect, useState} from 'react';
import Trenditem from '../Trenditem/Trenditem.js';

import {getmostliked} from '../../services/articleService.js';

import * as trendsstyle from './trends.module.css';

export default function Trend() {


    const [mostliked, setMostLiked] = useState(null);

    useEffect(() => {
        
        getmostliked(setMostLiked);

    }, []);


return(
    <div className = {trendsstyle.trends}>     
    <p className = {trendsstyle.headline}>Trends ON TBLOGS</p>


    { mostliked ? 

        mostliked.map((trend, index) => 
            <Trenditem  rank = {index+1} user = {trend.user} title = {trend.title} likes = {trend.likes} />
        )

    : ''}
    
    </div>
);
}