import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getOneEvent, updateEvent } from "../services/eventsServices.js";

const editTemplate= (event,editHandler)=>html`
        <section id="edit">
          <div class="form">
            <h2>Edit Event</h2>
            <form class="edit-form" @submit=${(e)=>editHandler(e)}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Event"
                .value=${event.name}
              />
              <input
                type="text"
                name="imageUrl"
                id="event-image"
                placeholder="Event Image"
                .value=${event.imageUrl}
              />
              <input
                type="text"
                name="category"
                id="event-category"
                placeholder="Category"
                .value=${event.category}
              />
              <textarea
                id="event-description"
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
              >${event.description}</textarea>
              
              <label for="date-and-time">Event Time:</label>
              <input
              type="text"
              name="date"
              id="date"
              placeholder="When?"
              .value=${event.date}
            />
              <button type="submit">Edit</button>
            </form>
          </div>
        </section>
`

export const editView = (ctx)=>{
    const eventId = ctx.params.eventId;
    const editHandler = (e)=>{
      e.preventDefault();
      const {name,imageUrl,category,description,date} = Object.fromEntries(new FormData(e.currentTarget));
      if(!name|| !imageUrl || !category|| !description|| !date){
          alert('Please fill in all fields!');
          return;
      }
      updateEvent(eventId,{name,imageUrl,category,description,date} )
      .then(()=>{
          ctx.page.redirect(`/${eventId}`)
      })
    }
   getOneEvent(eventId)
   .then(eventResult=>{
    ctx.render(editTemplate(eventResult,editHandler))

   })
}