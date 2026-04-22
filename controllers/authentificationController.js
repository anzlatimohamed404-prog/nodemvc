/**
 * Ce fichier est le contrôleur d'authentification, il gère la logique des pages liées aux utilisateurs.
 * La fonction registerView est déclenchée par le routeur lorsqu'un utilisateur accède à la page d'inscription.
 * La fonction loginView est déclenchée par le routeur lorsqu'un utilisateur accède à la page de connexion.
 * La fonction loginUser gère la logique de connexion : vérification de l'email et du mot de passe.
 * La fonction registerUser gère la logique d'inscription : création d'un nouvel utilisateur.
 * module.exports exporte toutes les fonctions du contrôleur pour qu'elles soient accessibles depuis le routeur.
 */

// Importation du modèle User pour interagir avec la table des utilisateurs dans la base de données
const { User } = require("../models");

// Importation de bcrypt pour comparer les mots de passe hashés stockés en base de données
const bcrypt = require("bcrypt");

module.exports = {

    // La vue register : affiche la page d'inscription à l'utilisateur
    registerView: (req, res) => {
        res.render("register");
    },

    // La vue login : affiche la page de connexion avec une variable error initialisée à null
    loginView: (req, res) => {
        res.render("login", { error: null });
    },

    // Méthode asynchrone loginUser : gère la logique de connexion d'un utilisateur existant
    // Elle vérifie si l'email existe en base de données, puis compare le mot de passe fourni
    loginUser: async (req, res) => {
        // Extraction de l'email et du mot de passe depuis le corps de la requête POST
        const { email, password } = req.body;

        try {
            // Recherche de l'utilisateur dans la base de données par son adresse email
            const user = await User.findOne({ where: { email } });

            // Si aucun utilisateur n'est trouvé avec cet email, on affiche un message d'erreur
            if (!user) {
                return res.render("login", {
                    error: "Vous n'avez pas de compte, veuillez vous inscrire."
                });
            }

            // Comparaison du mot de passe fourni avec le mot de passe hashé stocké en base de données
            const passwordMatch = await bcrypt.compare(password, user.password);

            // Si le mot de passe ne correspond pas, on affiche un message d'erreur
            if (!passwordMatch) {
                return res.render("login", {
                    error: "Email ou mot de passe incorrect."
                });
            }

            // Si tout est correct, on redirige l'utilisateur vers la page d'accueil
            res.redirect("/");

        } catch (err) {
            // En cas d'erreur serveur, on affiche un message d'erreur générique
            console.error(err);
            res.render("login", { error: "Une erreur est survenue." });
        }
    },

    // Méthode asynchrone registerUser : gère la logique d'inscription d'un nouvel utilisateur
    registerUser: async (req, res) => {
        console.log("###Controller RegisterUser**");
        console.log("### Controller - req : ", req.body);
    }
}