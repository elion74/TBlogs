import axios from 'axios';

    const submitSignup = async ( email, username, password, age ) =>{
        
        const body = {
            email:email, 
            username:username, 
            password:password, 
            age:age
        }

        const header = {
            'content-type': 'application/json'
        }
    
        try{   
            const res =  await axios.post('/signup', body, header);
            console.log(res);
        } catch(e){
            console.log('signup failed');
        }
    
    }


    const submitLogin = async (email, password, history) => {

        const body = {
            email:email, 
            password:password
        }

        const header = {
            'content-type': 'application/json'
        }

        try{
            // Hier ist JWT Token drin und in cookie auch
            const res = await axios.post('/login', body, header);
            console.log(res);

            if(res){
                console.log('go to home');
                history.push('/home');
                window.location.reload(true);
            }

        } catch(e){
            console.log('login failed');
        }

    }

   
    const submitLogout = async (history) => {
       
        try {
            var res = await axios.post('/logout');
            console.log(res);

            if (res) {
                history.replace('/');
                window.location.reload(true);
            }

        } catch(e){
            console.log('logout failed' + e);
        }

    }



export {
    submitLogin, 
    submitSignup, 
    submitLogout
}
