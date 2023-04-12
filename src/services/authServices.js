import * as api from '../utils/requetser.js';
import { getUserToken } from '../utils/userSessionManager.js';

const baseUrl = 'http://localhost:3030/users';


export const loginUser =(userData)=> api.post(`${baseUrl}/login`,userData);

export const registerUser = (userData)=>api.post(`${baseUrl}/register`,userData);

export const logout = async()=>{

 const response= await  fetch(`${baseUrl}/logout`,{
        headers:{
            'X-Authorization' : getUserToken()
        }
    })
    if(response.status==403){
       return;
    }
}