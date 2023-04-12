import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getOneEvent } from "../services/eventsServices.js";
import { addPersonToEvent, getGoingsForEvent, getIfUserGoesToEvent } from "../services/goingService.js";

const detailsTemplate = (event,isOwner,goingsCount,isUserGoingToEvent)=>html`

        <!-- Details page -->
        <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${event.imageUrl}" alt="example1" />
            <p id="details-title">${event.name}</p>
            <p id="details-category">
              Category: <span id="categories">${event.category}</span>
            </p>
            <p id="details-date">
              Date:<span id="date">${event.date}</span></p>
            <div id="info-wrapper">
              <div id="details-description">
                <span>${event.description}</span>
              </div>

            </div>

            <h3>Going: <span id="go">${goingsCount}</span> times.</h3>

            <div id="action-buttons">
                ${isOwner?
                html` 
                <a href="/edit/${event._id}" id="edit-btn">Edit</a>
              <a href="/delete/${event._id}" id="delete-btn">Delete</a> `
              :nothing}  

              ${!isOwner && !isUserGoingToEvent?
              html`<a  href="/going/${event._id}" id="go-btn">Going</a>`:
              nothing
            }

              
            </div>
          </div>
        </section>
`

export const detailsView =(ctx)=>{
     const eventId= ctx.params.eventId
    getOneEvent(eventId)
    .then(async(event)=>{
        const isOwner = event._ownerId==ctx.user?._id;

        const goingsCount = await getGoingsForEvent(eventId)
        const isUserGoingToEvent = ctx.user? Boolean(await getIfUserGoesToEvent(eventId,ctx.user._id)):true

        ctx.render(detailsTemplate(event,isOwner,goingsCount,isUserGoingToEvent))
    })
}