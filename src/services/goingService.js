import * as api from '../utils/requetser.js'
import { getUserToken } from '../utils/userSessionManager.js'

const baseUrl = 'http://localhost:3030/data/going'

export const getGoingsForEvent = (eventId)=>api.get(`${baseUrl}?where=eventId%3D%22${eventId}%22&distinct=_ownerId&count`)

export const getIfUserGoesToEvent = (eventId,userId)=>api.get(`${baseUrl}?where=eventId%3D%22${eventId}%22%20and%20_ownerId%3D%22${userId}%22&count`)

 export const addPersonToEvent = (eventId)=>api.post(baseUrl,{eventId})
// fetch(baseUrl,{
//     method:'POST',
//     headers:{
//         'X-Authorization' :getUserToken(),
//         'Content-Type':'application/json'
//     },
//     body:{
//        "eventId" : JSON.stringify(eventId)
//     }
// })
