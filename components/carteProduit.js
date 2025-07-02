export const carteProduit = (produit) => {
  return ` 
  <div class="produits-grid">
        <div class="carte-produit">
            <h4>${produit.nom}</h4>
            <p>${produit.description}</p>
            <span class="prix">${produit.prix}</span>
        </div>
    </div>
    `;
};
