#  Application E-commerce SPA

##  Description

Cette application est une **Single Page Application (SPA)** d'e-commerce développée entièrement en **JavaScript vanilla** suivant l'architecture **MVC (Modèle-Vue-Contrôleur)**. Elle permet aux utilisateurs de naviguer dans un catalogue de produits, de se connecter, et de gérer un panier d'achat, le tout sans rechargement de page.

##  Structure du Projet

```
Final_francis_talbot/
├── 📄 index.html              # Point d'entrée de l'application
├── 📄 app.js                  # Classe principale de l'application
├── 📄 router.js               # Système de routage SPA
├── 📁 assets/                 # Ressources statiques (images, CSS)
├── 📁 components/             # Composants réutilisables
│   ├── carteProduit.js        # Composant carte produit
│   ├── footer.js              # Composant pied de page
│   ├── formulaire.js          # Composant formulaire
│   └── header.js              # Composant en-tête
├── 📁 controllers/            # Contrôleurs MVC
│   ├── accueilController.js   # Contrôleur page d'accueil
│   ├── connexionController.js # Contrôleur connexion/authentification
│   ├── contactController.js   # Contrôleur page de contact
│   └── produitsController.js  # Contrôleur catalogue produits
├── 📁 data/                   # Données de l'application
│   └── db.json                # Base de données JSON (produits, utilisateurs)
├── 📁 models/                 # Modèles de données MVC
│   ├── panierModel.js         # Gestion du panier d'achat
│   ├── produitsModel.js       # Gestion des produits
│   └── utilisateurModel.js    # Gestion des utilisateurs
└── 📁 views/                  # Vues MVC
    ├── accueilView.js         # Vue page d'accueil
    ├── connexionView.js       # Vue connexion
    ├── contactView.js         # Vue contact
    └── produitsView.js        # Vue catalogue produits
```

## Technologies Utilisées

### Technologies Front-end
- **HTML5** : Structure sémantique de l'application
- **CSS3** : Stylisation et mise en page responsive
- **JavaScript ES6+** : Logique applicative et interactivité

### APIs Web Natives
- **History API** : Navigation SPA sans rechargement
- **Fetch API** : Communication asynchrone pour récupérer les données
- **LocalStorage** : Persistance du panier d'achat
- **SessionStorage** : Gestion de la session utilisateur

### Architecture
- **Modèle MVC** : Séparation claire des responsabilités
- **Modules ES6** : Organisation modulaire du code
- **SPA (Single Page Application)** : Expérience utilisateur fluide


##  Instructions de Lancement

### Prérequis
- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Un serveur web local (recommandé pour éviter les restrictions CORS)
- **Node.js** installé pour simuler la base de données avec json-server

###  Étape 1 : Démarrer la Base de Données
Avant de lancer l'application, vous devez démarrer le serveur JSON qui simule la base de données :

```bash
# Démarrer json-server pour simuler la base de données
npx json-server data/db.json
```

**Note** : json-server démarrera par défaut sur `http://localhost:3000` et servira les données des produits et utilisateurs.


### Étape 2: Démarré l'application avec l'extension VS Code Live Server
1. Installer l'extension "Live Server" dans VS Code
2. Clic droit sur `index.html` → "Open with Live Server"


### Accès à l'Application
Une fois les serveurs lancés :
1. **json-server** : `http://localhost:3000` (base de données)
2. **Application web** : `http://localhost:8000` (interface utilisateur)
