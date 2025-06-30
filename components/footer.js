export const footer = () => {
  return `
        <footer>
            <p>&copy; 2023 Pâte et Papier - Chez Denise</p>
            <nav>
                <ul>
                    <li><a onclick="navigate('accueil')">Accueil</a></li>
                    <li><a onclick="navigate('produits')">Produits</a></li>
                    <li><a onclick="navigate('connexion')">Connexion</a></li>
                    <li><a onclick="navigate('contact')">Contact</a></li>
                </ul>
            </nav>
        </footer>
    `;
};
