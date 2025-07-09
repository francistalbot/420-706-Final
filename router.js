import { App } from "./app.js";
const app = new App();
window.app = app;

const routes = {
  "/": "accueil", //() => import "./controllers/accueilController.js";
  "/produits": "produits",
  "/connexion": "connexion",
  "/contact": "contact",
};

window.navigate = function (page) {
  history.pushState({ page }, "", page === "accueil" ? "/" : "/" + page);
  renderCurrentView();
  //constroler.render();
};

function renderCurrentView() {
  const currentPath = location.pathname;
  const viewName = routes[currentPath];

  if (viewName) {
    app.loadView(viewName);
  } else {
    app.show404();
  }
}

window.addEventListener("popstate", renderCurrentView); // () => navigate(location.pathname.replace("/", "") || "accueil");
window.addEventListener("load", renderCurrentView);
