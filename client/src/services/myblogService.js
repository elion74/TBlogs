import axios from 'axios';

const getmyarticles = async (setArticles, setUser) => {

    try{
    
        const res = await axios.get('/article/myarticles');

        console.log(res);
        setArticles(res);
        setUser(res.data[0].user);

    }catch(e){  
        console.log(e);
    }

}

const deletemyarticle = async (article_id) => {

    console.log(article_id);

    try{
        const res = await axios.delete('/post/delete', {
            data:{
                id: article_id
            }
        });

        console.log(res);
    } catch(e){
        console.log(e);
    }
}

const sendUpdateddata = async (title, desc, content, id, history) => {


    const body = {
        title:title, 
        description:desc, 
        content:content,
        id:id
    } 

    try{

        history.push('/home');

        const res = await axios.post('/post/update', body);
        console.log(res);

    }catch(e){
        console.log(e);
    }
}

export{
    getmyarticles, 
    deletemyarticle, 
    sendUpdateddata
}