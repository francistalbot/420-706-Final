import { UtilisateurModel } from "./models/utilisateurModel.js";

// Instance globale partagée
export const utilisateurManager = new UtilisateurModel();

export class App {
  constructor() {
    this.setupGlobalEvents();
  }

  setupGlobalEvents() {
    document.addEventListener("submit", (e) => {
      if (e.target.id === "connexionForm") this.handleConnexion(e);
    });

    // Fonction globale pour la déconnexion
    window.handleDeconnexion = () => {
      utilisateurManager.logout();
      navigate("accueil");
    };
  }

  async handleConnexion(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const result = await utilisateurManager.authentification(email, password);
    console.log(result);
    if (result.success) {
      alert(`Bienvenue ${result.user.nom}`);
      this.updateHeader(); // Mettre à jour le header
      navigate("accueil");
    } else {
      alert("Erreur de connexion");
    }
  }

  async loadView(viewName) {
    try {
      const controllerModule = await import(
        `./controllers/${viewName}Controller.js`
      );
      const controller = controllerModule[`${viewName}Controller`];
      document.getElementById("app").innerHTML = controller();
    } catch (error) {
      console.log(`${error}`);
      this.show404();
    }
  }

  show404() {
    document.getElementById("app").innerHTML = `
            <h1>404 - Page non trouvée</h1>
            <button onclick="navigate('accueil')">Retour à l'accueil</button>
        `;
  }
}
