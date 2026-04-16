// Fichier app.js est la configuration principale de l'application Express

// Il importe le package, Express pour créer l'application web
const express = require("express");


// j'importe la route accueilRoute.js.
const accueilRoute = require("./routes/accueilRoutes.js");


// Initialisation de l'application Express
// "app" est l'objet central qui gère les routes, middlewares et requêtes
const app = express();

app.set("views", "./views");

app.set("view engine", "ejs");


app.use("/", accueilRoute);

// Exportation de "app" pour qu'il soit utilisable dans myserver.js
module.exports = app;