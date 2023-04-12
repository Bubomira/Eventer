import { html } from "../../node_modules/lit-html/lit-html.js";
import { loginUser } from "../services/authServices.js";
import { saveUserSession } from "../utils/userSessionManager.js";

const loginTemplate = (loginHadler)=>html`
    <section id="login">
          <div class="form">
            <h2>Login</h2>
            <form class="login-form" @submit=${(e)=>loginHadler(e)}>
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button type="submit">login</button>
              <p class="message">
                Not registered? <a href="/register">Create an account</a>
              </p>
            </form>
          </div>
        </section>
`

export const loginView = (ctx)=>{
   const loginHandler = (e)=>{
     e.preventDefault();
     const {email,password} = Object.fromEntries(new FormData(e.currentTarget));
     if(!email || !password){
        alert('please fill in all fields before submitting!');
        return;
     }

      loginUser({email,password})
      .then(user=>{
         saveUserSession(user);
         ctx.page.redirect('/')
      })
      .catch(err=>{
        alert('Not able to login');
      })

   }

    ctx.render(loginTemplate(loginHandler));
}