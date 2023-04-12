import { html } from "../../node_modules/lit-html/lit-html.js";

const guestNav = ()=>html`
 <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>
`

const loggedNav = ()=>html`
 <div class="user">
            <a href="/addEvent">Add Event</a>
            <a href="/logout">Logout</a>
          </div>
         
`

export const navigationTemplate = (ctx)=>html`
<a id="logo" href="/"
          ><img id="logo-img" src="./images/logo.png" alt=""  /></a>

        <nav>
          <div>
            <a href="/events">Events</a>
          </div>
          ${ctx.user?
          loggedNav():
          guestNav()}
          
        </nav>
`