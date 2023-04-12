import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getAllEvents } from "../services/eventsServices.js";

import { eventTemplate } from "./templates/eventTemplate.js";


const eventsTemplate =(events)=>html`
    <h2>Current Events</h2>
  <section id="dashboard">   
  ${ events.map(x=>eventTemplate(x))}       
    </section>

    ${events.length==0?
    html` <h4>No Events yet.</h4>`:
    nothing
    }


`

export const eventsView  =(ctx)=>{
    getAllEvents().then(events=>{
        ctx.render(eventsTemplate(events))
    })
}