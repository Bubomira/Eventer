import page from "../node_modules/page/page.mjs";
import { authMiddleware } from "./middlewares/authMiddleware.js";

import { renderContentMiddleware } from "./middlewares/renderContentMiddleware.js";
import { renderNavMiddleware } from "./middlewares/renderNavMiddleware.js";
import { createView } from "./views/createView.js";
import { deleteView } from "./views/deleteView.js";
import { detailsView } from "./views/detailsView.js";
import { editView } from "./views/editView.js";
import { eventsView } from "./views/eventsView.js";
import { goinView } from "./views/goingView.js";

import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { logoutView } from "./views/logoutView.js";
import { registerView } from "./views/registerView.js";

page(authMiddleware)
page(renderNavMiddleware)
page(renderContentMiddleware)


page('/',homeView)

page('/login',loginView)
page('/register',registerView)
page('/logout',logoutView)

page('/events',eventsView)
page('/addEvent',createView)
page('/edit/:eventId',editView)
page('/delete/:eventId',deleteView)
page('/going/:eventId',goinView)
page('/:eventId',detailsView)


page.start();