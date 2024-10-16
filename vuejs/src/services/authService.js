import axios from 'axios';

// register  a user
export const expressRegister = async (formData) => {
    try{
        const response = await axios.post('http://localhost:5000/register',formData);
        return response.data;
    }catch(err){
        throw err;
    }   
}

export const expressLogin = async (formData) => {
    try{
        const response = await axios.post('http://localhost:5000/login',formData);
        console.log('This is inside auth'+response.data);
    }catch(err){
        throw err;
    }
}