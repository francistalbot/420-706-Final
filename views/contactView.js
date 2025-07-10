import { header } from "../components/header.js";
import { footer } from "../components/footer.js";
import { contactForm } from "../components/formulaire.js";

export const contactView = () => {
  return `
    <div class="container">
        ${header()}
        <main>
            <div class="contact-form">
                <section class=" form-container">
                    <h2>Contactez-nous</h2>
                    ${contactForm()}
                </section>
            </div>
        </main>
        ${footer()}
    </div>
    `;
};
