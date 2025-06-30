import { header } from "../components/header.js";
import { footer } from "../components/footer.js";
import { carteProduit } from "../components/carteProduit.js";

export const accueilView = () => {
  return `
    <div class="accueil">
        ${header()}
        <main>
            <section class="hero">
                <h2>Bienvenue chez nous, Denise !</h2>
                <p>Découvrez nos produits .</p>
                <button onclick="window.navigate('produits')" class="btn-primary">
                    Voir nos produits
                </button>
            </section>

            <section class="produits-vedette">
                <h3>Produits en vedette</h3>
                ${carteProduit()}
            </section>
        </main>
        ${footer()}
    </div>
    `;
};
