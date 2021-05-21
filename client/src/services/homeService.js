import axios from 'axios';

const getposts = async (setArticles, setIsAuth) => {
    try{

        const res = await axios.get('/home');

        setIsAuth(res.data.status);
        setArticles(res);

        console.log(res);

    } catch(e){
        console.log(e);
        console.log(e.message);
    }   
}



const getcreators = async (setCreators) => {

    try{
        const  res = await axios.get('/home/users');
        console.log(res);    
        setCreators(res);

    } catch(e) {
        console.log(e)
    }


}


export {
    getposts, 
    getcreators
}