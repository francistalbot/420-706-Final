class App {
    async loadView(viewName) {
        try {
            const response = await fetch(`./views/${viewName}.html`);
            const html = await response.text();
            document.getElementById('app').innerHTML = html;
        } catch (error) {
            this.show404();
        }
    }

    show404() {
        document.getElementById('app').innerHTML = `
            <h1>404 - Page non trouvée</h1>
            <button onclick="navigate('accueil')">Retour à l'accueil</button>
        `;
    }
}

const app = new App();
