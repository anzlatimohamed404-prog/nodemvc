// Ce fichier est le routeur d'authentification, il gère les routes d'inscription et de connexion des utilisateurs.
// Le fichier authentificationRoute.js a pour mission de tracer les routes pour : enregistrer un utilisateur
// et se connecter à son compte utilisateur.

// Importation du module Express pour pouvoir utiliser ses fonctionnalités dans ce fichier
const express = require("express");

// Importation du contrôleur d'authentification pour accéder à ses fonctions depuis ce routeur
const authentificationController = require("../controllers/authentificationController");

// Importation du contrôleur utilisateur pour accéder aux fonctions findOne et findAll
const userController = require("../controllers/userController");

// Création d'une instance du routeur Express pour définir les routes dans un fichier séparé
const router = express.Router();

// Définition de la route GET "/register" qui écoute les requêtes sur http://localhost:3000/register
// et appelle la fonction registerView du contrôleur pour afficher la page d'inscription
router.get("/register", authentificationController.registerView);

// Définition de la route GET "/login" pour afficher la page de connexion
router.get("/login", authentificationController.loginView);

// Définition de la route POST "/register" pour traiter les données du formulaire d'inscription
router.post("/register", authentificationController.registerUser);

// Définition de la route GET "/users" pour récupérer tous les utilisateurs de la base de données
router.get("/users", userController.findAll);

// Définition de la route GET "/users/:id" pour récupérer un utilisateur particulier grâce à son id
// :id est un paramètre dynamique accessible via req.params.id dans le contrôleur
router.get("/users/:id", userController.findOne);

// Exportation du routeur pour qu'il soit importé et monté dans myserver.js via app.use()
module.exports = router;