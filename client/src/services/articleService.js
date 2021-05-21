import axios from 'axios';

const getarticledata = async (history, article_id) => {

    try {

        const res = await axios.get('/article', {
            headers: {
                id: article_id
            }
        });

        history.push({
            pathname: '/articles',
            state: res.data
        });

    } catch (e) {
        console.log(e);
    }
}  

const addLike = async (id) => {

    try{
        const body = {
            id:id
        }

        const res = await axios.post('/post/addlike', body);
        console.log(res)

    } catch(e){
        console.log(e);
    }   

}

const getmostliked = async (setMostLiked) => {

    try{

      
        const res = await axios.get('/article/getmostliked');
        setMostLiked(res.data);
        console.log(res);

    } catch(e){
        console.log(e);
    }

}


export {
    getarticledata, 
    addLike, 
    getmostliked
}