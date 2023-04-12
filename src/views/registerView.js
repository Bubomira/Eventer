import { html, reparentNodes } from "../../node_modules/lit-html/lit-html.js";
import { registerUser } from "../services/authServices.js";
import { saveUserSession } from "../utils/userSessionManager.js";

const registerTemplate = (registerHandler)=>html`
     <section id="register">
          <div class="form">
            <h2>Register</h2>
            <form class="register-form" @submit=${(e)=>registerHandler(e)}>
              <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
              />
              <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
              />
              <button type="submit">register</button>
              <p class="message">Already registered? <a href="#">Login</a></p>
            </form>
          </div>
        </section>
`

export const registerView = (ctx)=>{
    const registerHandler =(e)=>{
        e.preventDefault();

        const{email,password,['re-password']:rePass} = Object.fromEntries(new FormData(e.currentTarget));

        if(!email || !password||!rePass|| password!=rePass){
            alert('Please fill in all fields and make sure the passwords match!');
            return;
        }

        registerUser({email,password})
        .then(registeredUser=>{
            saveUserSession(registeredUser)
            ctx.page.redirect('/')
        })
        .catch(err=>{
            alert('Unable to register!')
        })

    }
    ctx.render(registerTemplate(registerHandler))
}

