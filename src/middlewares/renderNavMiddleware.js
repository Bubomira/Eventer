import { render } from "../../node_modules/lit-html/lit-html.js";
import { navigationTemplate } from "../views/navigationView.js";

const headerElement = document.querySelector('.headerNav');

export const renderNavMiddleware = (ctx,next)=>{
   render(navigationTemplate(ctx),headerElement);

   next();
}