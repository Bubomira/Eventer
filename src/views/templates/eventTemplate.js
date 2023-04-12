import { html } from "../../../node_modules/lit-html/lit-html.js";

export const eventTemplate = (event)=>html`
 <div class="event">
            <img src="${event.imageUrl}" alt="example1" />
            <p class="title">
              ${event.name}
            </p>
            <p class="date">${event.date}</p>
            <a class="details-btn" href="${event._id}">Details</a>
      </div>
`