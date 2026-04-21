// Importe l'objet db qui contient la connexion à la base de données et les modèles Sequelize
const db = require("../models");

// Récupère le modèle User depuis l'objet db pour pouvoir accéder aux fonctions de création/lecture d'utilisateurs
const User = db.user;

// Récupère l'opérateur Sequelize (Op) pour effectuer des opérations de comparaison complexes en base de données
const Op = db.Sequelize.Op;

// Exporte une fonction create qui sera utilisable depuis d'autres fichiers (routes, etc.)
exports.create = (req, res) => {
    // Crée un objet user avec les données reçues depuis le formulaire (req.body)
    const user = {
        // Récupère l'email envoyé par le client depuis le corps de la requête
        email: emailUser,
        // Récupère le mot de passe envoyé par le client depuis le corps de la requête
        password: passwordUser
    };

    // Utilise la méthode create du modèle User pour insérer le nouvel utilisateur en base de données
    // La méthode retourne une promesse (.then/.catch)
    user.create(user).then(data => {
        // Si la création réussit, envoie les données de l'utilisateur créé en réponse (status 200 par défaut)
        res.send(data);
        // Si la création échoue, le catch intercepte l'erreur
    }).catch(err => {
        // Envoie une réponse d'erreur avec le code HTTP 500 (erreur serveur)
        res.status(500).send({
            // Crée un objet avec un message d'erreur
            message:
            // Affiche le message d'erreur de la base de données, ou un message par défaut si celui-ci est vide
            err.message || "Il y a une erreur lors de la creation de user"
        });
    });
}
