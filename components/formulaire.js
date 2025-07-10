export const connexionForm = () => {
  return `
    <form id="connexionForm" onSubmit="app.handleConnexion(event)" class="form-group">
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
            <label for="password">Mot de passe:</label>
            <input type="password" id="password" name="password" required>
        </div>
        <button type="submit" class="btn btn-primary">Se connecter</button>
    </form>
                `;
};

export const contactForm = () => {
  return `
    <form id="contactForm" onSubmit="app.handleContact(event)" class="form-group" novalidate>
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
        <button type="submit" class="btn btn-primary">Envoyer</button>
    </form>
                `;
};
