import { header } from "../components/header.js";
import { footer } from "../components/footer.js";
import { carteProduit } from "../components/carteProduit.js";

export const produitsView = (produits) => {
  return `
    <div class="produits">
        ${header()}
        <main>
            <section class="produits">
                <h2>Produits</h2>
                <div class="produits-grid">
                    ${produits.map((produit) => carteProduit(produit)).join("")}
                </div>
            </section>
        </main>
        ${footer()}
    </div>
    `;
};
