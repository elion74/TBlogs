import React, {useEffect, useState} from 'react';
import {useHistory } from 'react-router-dom';
import { createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import {Button} from '@material-ui/core';
import {green} from '@material-ui/core/colors'; 
import DeleteIcon from '@material-ui/icons/Delete';
import Artricleview from  '../../components/Articleview/Articleview.js';

import {getmyarticles, deletemyarticle} from '../../services/myblogService.js';

import * as  myblogstyle from './myblog.module.css';
import img from '../../assets/defaultprofilepic.jpg';
   
const useStyles = makeStyles((theme) => ({
    deletebtn: {    
        marginTop:69
    },
    updatebtn: {        
        marginTop:69
    }
}));

const theme = createMuiTheme({
    palette: {
      primary: green,
    }, 
});

export default function MyBlog(){

    useEffect(() => {
        getmyarticles(setArticles, setUser);

    }, []);

    const classes = useStyles();
    const [articles, setArticles] = useState(null);
    const [user, setUser] = useState(null);
    const history = useHistory();


return(
    <div className = {myblogstyle.myblog}>
        
        <div className = {myblogstyle.intro}>
            <div className ={myblogstyle.imgbox}><img alt= 'img' className = {myblogstyle.image} src = {img}/></div>
            <p className = {myblogstyle.about}>ABOUT</p>
            <p className ={myblogstyle.aboutme}>{user}</p>
        </div>
    
    <div className = {myblogstyle.myblogbody}>

    <p className = {myblogstyle.headline}>Your Articles</p>

    {
        articles ? 

            articles.data.map((article) => 
                

            <Artricleview key = {article._id} width = {'900px'} id = {article._id} img_src = {btoa(String.fromCharCode(...new Uint8Array(article.image.img.data)))} img_type = {article.image.contentType} likes = {article.likes} username = {article.user} title ={article.title} description ={article.description} content = {article.content} tags = {article.tags}>
                <div 
                    className ={myblogstyle.buttons}
                >
                <Button
                    variant="contained"
                    color="secondary"
                    className = {classes.deletebtn}
                    startIcon={<DeleteIcon />}
                    onClick = {() => deletemyarticle(article._id)}
                >
                    Delete
                </Button>

                <ThemeProvider theme={theme}>
                    <Button variant="contained" 
                    className = {classes.updatebtn}
                    color="primary"
                    onClick = {() => history.push('/update',{
                        state:article._id
                    })}
                    >
                        update
                    </Button>
                </ThemeProvider>

                </div>
            </Artricleview>
            )
        :''
    }

    </div>

    </div>
);
}