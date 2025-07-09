import { UtilisateurModel } from "./models/utilisateurModel.js";
import { panierModel } from "./models/panierModel.js";
import { ProduitsModel } from "./models/produitsModel.js";

// Instance globale partagée
const utilisateurManager = new UtilisateurModel();
const panierManager = new panierModel();
const produitsManager = new ProduitsModel();

export class App {
  constructor() {
    this.produits = [];
    this.loadProduits();
  }

  async loadProduits() {
    try {
      this.produits = await produitsManager.getProduits();
      console.log("Produits chargés:", this.produits);
    } catch (error) {
      console.error("Erreur lors du chargement des produits:", error);
    }
  }

  //Gestion du panier
  async ajouterAuPanier(produitId) {
    const produit = this.produits.find((p) => p.id === String(produitId));
    if (!produit) {
      alert("Produit introuvable !");
      return;
    }
    panierManager.ajouterAuPanier(produit);
    navigate("produits");
  }

  viderPanier() {
    panierManager.viderPanier();
    alert("Le panier a été vidé.");
    navigate("produits");
  }

  //Gestion de l'utilisateur
  handleDeconnexion() {
    utilisateurManager.logout();
    navigate("accueil");
  }

  async handleConnexion(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const result = await utilisateurManager.authentification(email, password);
    console.log(result);
    if (result.success) {
      alert(`Bienvenue ${result.user.nom}`);
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
