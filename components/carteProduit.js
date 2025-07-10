export const carteProduit = (produit) => {
  return `
        <div class="produit-card">
            <h4>${produit.nom}</h4>
            <p class="info">${produit.description}</p>
            <p class="prix">${produit.prix} $</p>
            <button class="ajouter-panier btn btn-primary" onclick="app.ajouterAuPanier(${produit.id})">Ajouter au panier</button>
        </div>
    `;
};
