import { logout } from "../services/authServices.js"
import { removeUser } from "../utils/userSessionManager.js"

export const logoutView =(ctx)=>{
    logout().then(()=>{
      removeUser()
      ctx.page.redirect('/')
    })
    .catch(err=>{alert('Unable to logout')
    console.log(err)})
}