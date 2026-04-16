// Fichier : controleur de la page d'accueil
// Son rôle est de définir les routes liées à la page accueil.ejs

// Importation d'Express pour pouvoir utiliser ses fonctionnalités
const express = require("express");

// Création d'un routeur Express
// Le Router() permet de regrouper les routes d'une même page dans un fichier séparé,
// plutôt que de tout mettre dans app.js. C'est une bonne pratique pour organiser son code.
const router = express.Router();



/**
 * On importe le contrôleur accueilController depuis le dossier controllers.
 * Le chemin "../controllers/accueilController" remonte d'un niveau pour accéder au bon dossier.
 * Cette importation via require() rend disponibles toutes les fonctions exportées du contrôleur,
 * notamment accueilViews, qui sera utilisée pour gérer la logique de la route d'accueil.
 * Sans cette ligne, le routeur ne pourrait pas accéder aux fonctions du contrôleur.
 */
const accueilController = require("../controllers/accueilController");



/**
 * Définition de la route principale (accueil) de l'application.
 * Cette route répond aux requêtes HTTP GET envoyées à la racine "/",
 * accessible via l'URL :localhost:3009
 * Lorsqu'un utilisateur visite cette adresse dans son navigateur,
 * le serveur Express intercepte la requête et exécute la fonction callback.
 * Ici, on renvoie simplement un message de bienvenue en texte brut.
 */
router.get("/", accueilController.accueilViews);
module.exports = router;