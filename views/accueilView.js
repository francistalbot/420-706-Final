import { header } from "../components/header.js";
import { footer } from "../components/footer.js";
import { carteProduit } from "../components/carteProduit.js";

export const accueilView = () => {
  return `
    <div class="container">
        ${header()}
        <main>
            <div class="accueil">
                <section class="hero">
                    <h2>Bienvenue chez nous, Denise !</h2>
                    <p>Découvrez nos produits .</p>
                    <button onclick="window.navigate('produits')" class="btn btn-primary">
                        Voir nos produits
                    </button>
                </section>

                <section class="produits-vedette">
                    <h3>Produits en vedette</h3>
                    <div class="produits-grid">
                            <div class="produit-card">
                                <h4>Produit 1</h4>
                                <p class="info">Description du produit 1</p>
                                <span class="prix">30.99$</span>
                            </div>
                            <div class="produit-card">
                                <h4>Produit 2</h4>
                                <p class="info">Description du produit 2</p>
                                <span class="prix">49.99$</span>
                            </div>
                        </div>
                </section>
            </div>
        </main>
        ${footer()}
    </div>
    `;
};
