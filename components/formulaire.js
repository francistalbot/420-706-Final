export const connexionForm = () => {
  return `
    <form id="connexionForm" onSubmit="app.handleConnexion(event)">
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
    <form id="contactForm" onSubmit="app.handleContact(event)" novalidate>
        <ul id="message" class="hidden"></ul>
        <div class="form-group">
            <label for="nom">Nom:</label>
            <input type="text" id="nom" name="nom" required>
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>   
        </div>
        <div class="form-group">
            <label for="text">Message:</label>
            <textarea id="text" name="text" required></textarea>  
        </div>
        <button type="submit">Envoyer</button>
    </form>
                `;
};
