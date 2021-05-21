import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Chip } from '@material-ui/core';

import { useHistory } from 'react-router-dom';

import { getarticledata } from '../../services/articleService.js';

import * as  articleviewstyle from './articleview.module.css';


import Like from '../Like/Like.js';

export default function Articleview(props) {

    // !! damit wenn von MyBlog.js kommt das gesammte articleview div auf 900px vergrößert wird-->MyBlogs.js gibt props an Article.js
    const style = {
        maxWidth: props.width
    }

    const history = useHistory();
    
    return (
        <div className={articleviewstyle.articleview} style={style}>

            <div className={articleviewstyle.info}>
                <h4 className={articleviewstyle.creator}>written by {props.username} and likes: {props.likes}</h4>

                <h4 className={articleviewstyle.title} onClick={() => { getarticledata(history, props.id) }}>{props.title}</h4>

                <h4 className={articleviewstyle.description}>{props.description}</h4>

                <div className={articleviewstyle.tags}>

                    <Like id = {props.id} />
                    <Chip style={{ marginLeft: '5%' }} label={props.tags[0]} />
                    <Chip style={{ marginLeft: '5%' }} label={props.tags[1]} />
                    <Chip style={{ marginLeft: '5%' }} label={props.tags[2]} />
                    <Chip style={{ marginLeft: '5%' }} label={props.tags[3]} />
                </div>

            </div>
            <img style={{ width: '300px' }} src={`data:${props.img_type};base64,${props.img_src}`} alt='' />

            {props.children}

        </div>
    );
} 