import { UtilisateurModel } from "../models/utilisateurModel.js";
import { panierModel } from "../models/panierModel.js";

// Instance globale partagée
const utilisateurManager = new UtilisateurModel();
const panierManager = new panierModel();

export const header = () => {
  const currentUser = utilisateurManager.getUtilisateur();
  const isLoggedIn = utilisateurManager.estConnecté();

  return `
    <header> 
        <h1>Pâte et Papier - Chez Denise</h1>
        <nav>
            <ul>
                <li><a onclick="navigate('accueil')">Accueil</a></li>
                <li><a onclick="navigate('produits')">Produits</a></li>
                ${
                  isLoggedIn
                    ? `<li><span>Bonjour ${currentUser.nom}</span></li>
                     <li><a onclick="app.handleDeconnexion()">Déconnexion</a></li>`
                    : `<li><a onclick="navigate('connexion')">Connexion</a></li>`
                }
                <li><a onclick="navigate('contact')">Contact</a></li>
                <li><a onclick="app.viderPanier()">Panier (${panierManager.afficherNombreProduits()})
                : ${panierManager.obtenirTotalPanier()} $ </a></li>
            </ul>
        </nav>
    </header>
    `;
};
