import { header } from "../components/header.js";
import { footer } from "../components/footer.js";
import { connexionForm } from "../components/formulaire.js";

export const connexionView = () => {
  return `
    <div class="connexion">
        ${header()}
        <main>
            <section class="connexion-form">
                <h2>Connexion</h2>
                ${connexionForm()}
            </section>
        </main>
        ${footer()}
    </div>
    `;
};
