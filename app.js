// Fichier app.js est la configuration principale de l'application Express

// Importation du package Express pour créer l'application web
const express = require("express");

// Importation des routes
const accueilRoute = require("./routes/accueilRoutes.js");
const authRoute = require("./routes/authentificationRoute.js");

// Importation de la base de données Sequelize
const db = require("./models");

// Initialisation de l'application Express
const app = express();

// Configuration du moteur de vues EJS
app.set("views", "./views");
app.set("view engine", "ejs");

// Utiliser les fichiers statiques qui sont dans le dossier public
app.use(express.static("public"));

// Middlewares pour parser les données POST
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Synchronisation des modèles Sequelize avec la base de données
// force: false = ne supprime pas les tables existantes
db.sequelize.sync({ force: false }).then(() => {
    console.log("Base de données synchronisée avec succès !");
}).catch((err) => {
    console.log("Erreur de synchronisation : " + err.message);
});

// Montage des routeurs sur l'application
app.use("/", accueilRoute);
app.use("/", authRoute);

// Exportation de "app" pour qu'il soit utilisable dans myserver.js
module.exports = app;