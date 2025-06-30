export const header = () => {
  return `
    <header> 
        <h1>Pâte et Papier - Chez Denise </h1>
        <nav>
            <ul>
                <li><a onclick="navigate('accueil')">Accueil</a></li>
                <li><a onclick="navigate('produits')">Produits</a></li>
                <li><a onclick="navigate('connexion')">Connexion</a></li>
                <li><a onclick="navigate('contact')">Contact</a></li>
            </ul>
        </nav>
    </header>
    `;
};
