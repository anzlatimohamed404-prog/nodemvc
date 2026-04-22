// Importe l'objet db qui contient la connexion à la base de données et les modèles Sequelize
const db = require("../models");

// Récupère le modèle User depuis l'objet db pour pouvoir accéder aux fonctions de création/lecture d'utilisateurs
const User = db.user;

// Récupère l'opérateur Sequelize (Op) pour effectuer des opérations de comparaison complexes en base de données
const Op = db.Sequelize.Op;

// Méthode pour récupérer un utilisateur particulier grâce à son id (identifiant)
// findOne est bien déclaré en dehors de create pour rester accessible depuis les routes
exports.findOne = (req, res) => {
    // Je récupère l'id de l'utilisateur depuis les paramètres de la requête, puis je le stocke dans la variable idUser
    const idUser = req.params.id;

    // Recherche de l'utilisateur dans la base de données via son id
    User.findByPk(idUser)
        .then(data => {
            // Si aucun utilisateur n'est trouvé avec cet id, on renvoie une erreur 404
            if (!data) {
                return res.status(404).send({
                    message: `L'utilisateur avec l'identifiant ${idUser} n'existe pas`
                });
            }
            // Utilisateur trouvé, on renvoie ses données au client avec un status 200
            res.send(data);
        })
        .catch(err => {
    // Erreur serveur lors de la requête, on renvoie un status 500
    res.status(500).send({
        // Affiche le message d'erreur, ou un message par défaut contenant l'id recherché
        message: err.message || `Erreur lors de la recherche de l'utilisateur avec l'identifiant ${idUser}`
    });
});

}

    

// Exporte une fonction create qui sera utilisable depuis d'autres fichiers (routes, etc.)
exports.create = (req, res) => {

    // Je récupère l'email saisi côté front-end et je le stocke dans la variable emailUser
    const emailUser = req.body.email;

    // Je récupère le mot de passe saisi côté front-end et je le stocke dans la variable passwordUser
    const passwordUser = req.body.motdepasse;

    // Vérification des données email et mot de passe
    // Si l'email OU le mot de passe est absent/vide, on arrête la création du compte utilisateur
    if (!emailUser || !passwordUser) {
        // On renvoie une erreur 400 (mauvaise requête) avec un message explicatif
        return res.status(400).send({
            message: "Veuillez compléter les champs."
        });
    }

    // Crée un objet user avec les données reçues depuis le formulaire (req.body)
    // Déclaré après la vérification pour s'assurer que les données sont valides
    const user = {
        // Récupère l'email envoyé par le client depuis le corps de la requête
        email: emailUser,
        // Récupère le mot de passe envoyé par le client depuis le corps de la requête
        password: passwordUser
    };

    // Utilise la méthode create du modèle User pour insérer le nouvel utilisateur en base de données
    // La méthode retourne une promesse (.then/.catch)
    User.create(user)
        .then(data => {
            // Si la création réussit, envoie les données de l'utilisateur créé en réponse (status 200 par défaut)
            res.send(data);
        })
        // Si la création échoue, le catch intercepte l'erreur
        .catch(err => {
            // Envoie une réponse d'erreur avec le code HTTP 500 (erreur serveur)
            res.status(500).send({
                // Affiche le message d'erreur de la base de données, ou un message par défaut si celui-ci est vide
                message: err.message || "Il y a une erreur lors de la création du user"
            });
        });
};

// Méthode pour récupérer tous les utilisateurs présents dans la base de données
exports.findAll = (req, res) => {
    User.findAll().
    then()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Erreur lors de la récupération de tous les utilisateurs."
        });
    });
}