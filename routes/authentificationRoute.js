

// Ce fichier est le routeur d'authentification, il gère les routes d'inscription et de connexion des utilisateurs.
// Le fichier authentificationRoute.js a pour mission de tracer les routes pour : enregistre un utilisateur
// se connecter a son compte utilisateur.


// Importation du module Express pour pouvoir utiliser ses fonctionnalités dans ce fichier
const express = require("express");

// Importation du contrôleur d'authentification pour accéder à ses fonctions depuis ce routeur
const authentificationController = require("../controllers/authentificationController");

// Création d'une instance du routeur Express pour définir les routes dans un fichier séparé
const router = express.Router();

// Définition de la route GET "/register" qui écoute les requêtes sur http://localhost:3009/register
// et appelle la fonction registerView du contrôleur pour afficher la page d'inscription
router.get("/register", authentificationController.registerView);

// Exportation du routeur pour qu'il soit importé et monté dans app.js via app.use()
module.exports = router;