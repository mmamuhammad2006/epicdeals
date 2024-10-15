import axios from 'axios';

// register  a user
export const expressRegister = async (formData) => {
    try{
        console.log(formData)
        const response = await axios.post('http://localhost:5000/register',formData);
        return response.data;
    }catch(err){
        console.error(err);
        throw err;
    }   
}

export const expressLogin = async (formData) => {
    try{
        console.log(formData);
        const response = await axios.post('http://localhost:5000/login',formData);
        return response.data;
    }catch(err){
        throw err;
    }
}
// export default {expressRegister,expressLogin};