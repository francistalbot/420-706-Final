import { utilisateurManager } from "../app.js";
import { UtilisateurModel } from "../models/utilisateurModel.js";
export const header = () => {
  const utilisateurModel = new UtilisateurModel();
  const currentUser = utilisateurModel.getUtilisateur();
  const isLoggedIn = utilisateurModel.estConnecté();

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
                     <li><a onclick="handleDeconnexion()">Déconnexion</a></li>`
                    : `<li><a onclick="navigate('connexion')">Connexion</a></li>`
                }
                <li><a onclick="navigate('contact')">Contact</a></li>
            </ul>
        </nav>
    </header>
    `;
};
