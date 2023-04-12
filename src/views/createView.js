import { html } from "../../node_modules/lit-html/lit-html.js";
import { createEvent } from "../services/eventsServices.js";

const createTemplate = (createHandler)=>html`
   <section id="create">
          <div class="form">
            <h2>Add Event</h2>
            <form class="create-form" @submit=${(e)=>createHandler(e)}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Event"
              />
              <input
                type="text"
                name="imageUrl"
                id="event-image"
                placeholder="Event Image URL"
              />
              <input
                type="text"
                name="category"
                id="event-category"
                placeholder="Category"
              />


              <textarea
                id="event-description"
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
              ></textarea>
              
              <input
              type="text"
              name="date"
              id="date"
              placeholder="When?"
            />

              <button type="submit">Add</button>
            </form>
          </div>
        </section>
`

export const createView = (ctx)=>{
    const createHandler = (e)=>{
        e.preventDefault();
        const {name,imageUrl,category,description,date} = Object.fromEntries(new FormData(e.currentTarget));
        if(!name|| !imageUrl || !category|| !description|| !date){
            alert('Please fill in all fields!');
            return;
        }
        createEvent({name,imageUrl,category,description,date})
        .then(()=>{
            ctx.page.redirect('/events')
        })
    }
    ctx.render(createTemplate(createHandler))
}