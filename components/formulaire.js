export const connexionForm = () => {
  return `
    <form id="connexionForm">
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
            <label for="password">Mot de passe:</label>
            <input type="password" id="password" name="password" required>
        </div>
        <button type="submit">Se connecter</button>
    </form>
                `;
};

export const contactForm = () => {
  return `
    <form id="contactForm">
        <div class="form-group">
            <label for="name">Nom:</label>
            <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>   
        </div>
        <div class="form-group">
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>  
        </div>
        <button type="submit">Envoyer</button>
    </form>
                `;
};
