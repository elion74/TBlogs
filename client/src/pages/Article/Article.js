import React, {useState} from 'react';
import { Chip } from '@material-ui/core';


import * as articlestyle from './article.module.css';


export default function Article (props){

    const [data, setData] = useState(props.location.state);

return(
    <div className = {articlestyle.article      }>      
        <h1 className = {articlestyle.article_title}>{data.data.title}</h1>

        <p className = {articlestyle.article_content}>{data.data.content}</p>

        <Chip style={{ marginLeft: '12.5%' }} label={data.data.tags[0]} />
        <Chip style={{ marginLeft: '12.5%' }} label={data.data.tags[1]} />
        <Chip style={{ marginLeft: '12.5%' }} label={data.data.tags[2]} />
        <Chip style={{ marginLeft: '12.5%' }} label={data.data.tags[3]} />

    </div>
);
}

                 