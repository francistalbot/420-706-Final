export const carteProduit = (produit) => {
  return ` 
  <div class="produits-grid">
        <div class="carte-produit">
            <h4>${produit.nom}</h4>
            <p>${produit.description}</p>
            <p class="prix">${produit.prix} $</p>
            <button class="ajouter-panier" onclick="app.ajouterAuPanier(${produit.id})">Ajouter au panier</button>
        </div>
    </div>
    `;
};
