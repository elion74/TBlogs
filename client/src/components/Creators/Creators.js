import React, {useEffect, useState} from 'react';
import { Avatar, makeStyles } from '@material-ui/core';

import {getcreators} from '../../services/homeService.js';

import * as creatorsstyle from './creators.module.css';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex','& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
}));

export default function Creators (){
    
    const classes = useStyles();
    const [creators, setCreators] = useState(null);


useEffect(() => {

    
    getcreators(setCreators);


}, []);

return(
    <div className = {creatorsstyle.creators}>
    <h1>Creators</h1>

        {  creators ? 
                creators.data.map(creator => 
                    <div className = {creatorsstyle.avatar}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
                        <span className = {creatorsstyle.username}>{creator.username}</span>
                    </div>
                )
        : ''
        } 
    </div>
);
}