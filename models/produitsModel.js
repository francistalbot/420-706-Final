const baseURL = "http://localhost:3000/produits";

export class ProduitsModel {
  async getProduits() {
    try {
      const response = await fetch(baseURL);
      const produits = await response.json();
      return produits;
    } catch (err) {
      console.error(err);
    }
  }
}
