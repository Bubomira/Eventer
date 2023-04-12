import { getUser } from "../utils/userSessionManager.js"

export const authMiddleware = (ctx,next)=>{
    ctx.user = getUser();

    next();

}