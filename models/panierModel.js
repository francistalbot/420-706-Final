export class panierModel {
  ajouterAuPanier(produit) {
    // Logique pour ajouter un produit au panier
    console.log("Produit ajouté au panier:", produit);
    let panier = JSON.parse(localStorage.getItem("panier")) || [];
    panier.push(produit);
    localStorage.setItem("panier", JSON.stringify(panier));
  }

  obtenirPanier() {
    // Logique pour obtenir le contenu du panier
    return JSON.parse(localStorage.getItem("panier")) || [];
  }

  viderPanier() {
    // Logique pour vider le panier
    localStorage.removeItem("panier");
    console.log("Panier vidé");
  }

  supprimerDuPanier(produit) {
    // Logique pour supprimer un produit du panier
    let panier = JSON.parse(localStorage.getItem("panier")) || [];
    panier = panier.filter((item) => item !== produit);
    localStorage.setItem("panier", JSON.stringify(panier));
    console.log(`Produit supprimé du panier: ${produit}`);
  }

  obtenirTotalPanier() {
    // Logique pour obtenir le total du panier
    let panier = JSON.parse(localStorage.getItem("panier")) || [];
    console.log("Total du panier:", panier);
    return panier.reduce((total, item) => total + item.prix, 0).toFixed(2);
  }

  // Afficher le nombre de produits dans le panier
  afficherNombreProduits() {
    const panier = this.obtenirPanier();
    const nombreProduits = panier.length;
    console.log(`Nombre de produits dans le panier: ${nombreProduits}`);
    return nombreProduits;
  }

  afficherPanier() {
    // Logique pour afficher le contenu du panier
    const panier = this.obtenirPanier();
    if (panier.length === 0) {
      console.log("Le panier est vide.");
      return;
    }
    console.log("Contenu du panier:");
    panier.forEach((item) => {
      console.log(
        `Produit: ${item.nom}, Prix: ${item.prix}, Quantité: ${item.quantite}`
      );
    });
  }
}
