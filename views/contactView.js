import { header } from "../components/header.js";
import { footer } from "../components/footer.js";
import { contactForm } from "../components/formulaire.js";

export const contactView = () => {
  return `
    <div class="contact">
        ${header()}
        <main>
            <section class="contact-form">
                <h2>Contactez-nous</h2>
                ${contactForm()}
            </section>
        </main>
        ${footer()}
    </div>
    `;
};
