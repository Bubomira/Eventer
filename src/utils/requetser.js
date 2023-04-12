import { getUserToken } from "./userSessionManager.js";

const requester = async(method,url,data)=>{
    const options = {method:method,headers:{}};

    if(method!="GET"){
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }
    const token = getUserToken();

    if(token){
        options.headers[ 'X-Authorization'] = token
    }

    const response = await fetch(url,options);
    if(response.ok){
        return response.json();
    }
    throw new Error();

}

export const get = requester.bind({},'GET')
export const post = requester.bind({},'POST')
export const put = requester.bind({},'PUT')
export const del = requester.bind({},'DELETE')