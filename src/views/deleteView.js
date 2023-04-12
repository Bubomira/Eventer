import { removeEvent } from "../services/eventsServices.js"

export const deleteView = (ctx)=>{
   const confirmation = confirm('Are you sure you want to delete this event?')

   if(confirmation){
      removeEvent(ctx.params.eventId)
      .then(()=>{
        ctx.page.redirect('/events')
      })
   }
}