const baseURL = "http://localhost:3000/utilisateurs";

export class UtilisateurModel {
  async authentification(email, password) {
    const response = await fetch("./data/db.json");
    const data = await response.json();

    const user = data.utilisateurs.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      const userSession = {
        id: user.id,
        nom: user.nom,
        email: user.email,
      };

      sessionStorage.setItem("currentUser", JSON.stringify(userSession));

      return { success: true, user: userSession };
    }

    return { success: false, message: "Identifiants invalides" };
  }

  estConnecté() {
    const user = sessionStorage.getItem("currentUser");
    return user !== null;
  }

  getUtilisateur() {
    const user = sessionStorage.getItem("currentUser");
    return user ? JSON.parse(user) : null;
  }

  logout() {
    sessionStorage.removeItem("currentUser");
  }
}
