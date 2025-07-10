import { header } from "../components/header.js";
import { footer } from "../components/footer.js";
import { connexionForm } from "../components/formulaire.js";

export const connexionView = () => {
  return `
    <div class="container">
        ${header()}
        <main>
            <div class="connexion-form">
                <section class="form-container">
                    <h2>Connexion</h2>
                    ${connexionForm()}
                </section>
            </div>
        </main>
        ${footer()}
    </div>
    `;
};
