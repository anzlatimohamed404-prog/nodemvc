
// Fichier app.js est la configuration principale de l'application Express

// Il importe le package, Express pour créer l'application web
const express = require("express");

// J'importe le pilote Mysql2 utilisé pour interroger la base de données MySQL
const mysql2 = require("mysql2");

// J'importe le pilote express-myconnection utilisé pour me connecter à la BDD
const myconnection = require('express-myconnection');


// j'importe la route accueilRoute.js.
const accueilRoute = require("./routes/accueilRoutes.js");


const authRoute = require("./routes/authentificationRoute.js");
// Initialisation de l'application Express
// "app" est l'objet central qui gère les routes, middlewares et requêtes

const db = require("./models");

// j'initialise l'aplication 
const app = express();

app.set("views", "./views");

app.set("view engine", "ejs");

// utiliser les fichiers statique qui sont dans le dossier public
app.use( express.static("public"));

// Middlewares pour parser les données POST
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

db.sequelize.sync({force: true}).then(() => {
    console.log("Sync db");
}).catch((err) => {
    console.log("Failed to sync db : " + err.message);
});

// Je configure les éléments attendus pour me connecter à Mysql
const optionsConnection = {
    host: "localhost",
    user: "root",
    password: "Irwane240319",
    database: "mygourmet",
    port: 3306
};

// Middleware pour se connecter à la BDD Mysql pool est la stratégie de connexion à la BDD Mysql
app.use(myconnection(mysql2, optionsConnection, "pool"));


// configurer la connection à la base de données

app.use("/", accueilRoute);
app.use("/", authRoute);

// Exportation de "app" pour qu'il soit utilisable dans myserver.js
module.exports = app;