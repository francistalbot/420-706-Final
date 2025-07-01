import { produitsView } from "../views/produitsView.js";
import { ProduitsModel } from "../models/produitsModel.js";

const produitsModel = new ProduitsModel();
const produits = await produitsModel.getProduits();

export const produitsController = () => {
  return produitsView(produits);
};
