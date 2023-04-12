import { render } from "../../node_modules/lit-html/lit-html.js";

const contentElement = document.querySelector('.mainContent');

const renderContent = (templateResult)=>{
   render(templateResult,contentElement);
}

export const renderContentMiddleware = (ctx,next)=>{
     ctx.render = renderContent;
    next();
}