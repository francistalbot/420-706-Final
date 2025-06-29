
function loadView(viewName) {
    document.getElementById('app').innerHTML = `
        <nav>
            <a href="javascript:void(0)" onclick="window.navigate('accueil')">Accueil</a> |
            <a href="javascript:void(0)" onclick="window.navigate('produits')">Produits</a> |
            <a href="javascript:void(0)" onclick="window.navigate('connexion')">Connexion</a> |
            <a href="javascript:void(0)" onclick="window.navigate('contact')">Contact</a>
        </nav>
        <h1>Vue: ${viewName}</h1>
    `;
}

function show404() {
    document.getElementById('app').innerHTML = '<h1>404 - Page non trouvée</h1>';
}