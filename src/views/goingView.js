import { addPersonToEvent } from "../services/goingService.js"

export const goinView =(ctx)=>{
    const eventId = ctx.params.eventId;
        addPersonToEvent(eventId)
        .then(ctx.page.redirect(`/${eventId}`))
}