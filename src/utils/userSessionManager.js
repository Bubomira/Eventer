export const saveUserSession = (user)=>{
   localStorage.setItem('user',JSON.stringify(user));
}

export const getUser = ()=>{
    const stringifyedUser = localStorage.getItem('user');
    if(stringifyedUser){
        return JSON.parse(stringifyedUser);
    }
}

export const getUserToken = ()=>{
const user =getUser();
if(user){
return user.accessToken
}
}

export const removeUser = ()=>localStorage.removeItem('user');