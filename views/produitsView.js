import { header } from "../components/header.js";
import { footer } from "../components/footer.js";
import { carteProduit } from "../components/carteProduit.js";

export const produitsView = () => {
  return `
    <div class="contact">
        ${header()}
        <main>
            <section class="produits">
                <h2>Produits</h2>
                ${carteProduit()}
            </section>
        </main>
        ${footer()}
    </div>
    `;
};
