
/**
 * FICHIER : myserver.js
 * Crée et démarre le serveur HTTP de l'application.
 */


// Importation du module natif Node.js pour créer un serveur HTTP
const http = require("http");

// Importation de l'application Express configurée dans app.js (routes, middlewares...)
const app = require("./app");

// Création du serveur HTTP en lui passant "app" pour gérer les requêtes
const server = http.createServer(app);

// Numéro de port sur lequel le serveur va écouter les requêtes entrantes
// On utilise une variable d'environnement ou un port par défaut local
const numeroPort = process.env.PORT || 3000;

// Démarrage du serveur sur le port défini
// Le callback s'exécute une seule fois quand le serveur est prêt
server.listen(numeroPort, () => {
    console.log(`Le serveur est à l'écoute sur le port ${numeroPort}`);
});