class App {
  async loadView(viewName) {
    console.log(`${viewName}`);
    try {
      const controllerModule = await import(
        `./controllers/${viewName}Controller.js`
      );
      console.log(`${viewName}`);
      const controller = controllerModule[`${viewName}Controller`];
      document.getElementById("app").innerHTML = controller();
      console.log(`${viewName}`);
    } catch (error) {
      console.log(`${error}`);
      this.show404();
    }
  }

  show404() {
    document.getElementById("app").innerHTML = `
            <h1>404 - Page non trouvée</h1>
            <button onclick="navigate('accueil')">Retour à l'accueil</button>
        `;
  }
}

const app = new App();
