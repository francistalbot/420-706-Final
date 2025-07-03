import { App } from "./app.js";
const app = new App();

const routes = {
  "/": "accueil",
  "/produits": "produits",
  "/connexion": "connexion",
  "/contact": "contact",
};

window.navigate = function (page) {
  history.pushState({ page }, "", page === "accueil" ? "/" : "/" + page);
  renderCurrentView();
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

window.addEventListener("popstate", renderCurrentView);
window.addEventListener("load", renderCurrentView);
