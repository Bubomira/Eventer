
import * as api from '../utils/requetser.js'

const baseUrl = 'http://localhost:3030/data/events'

export const getAllEvents = ()=>api.get(`${baseUrl}?sortBy=_createdOn%20desc`);

export const createEvent = (eventData)=>api.post(baseUrl,eventData)

export const getOneEvent = (eventId)=>api.get(`${baseUrl}/${eventId}`)

export const updateEvent = (eventId,eventData)=>api.put(`${baseUrl}/${eventId}`,eventData)

export const removeEvent = (eventId)=>api.del(`${baseUrl}/${eventId}`)