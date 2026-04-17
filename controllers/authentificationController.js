/**
 * Ce fichier est le contrôleur d'authentification, il gère la logique des pages liées aux utilisateurs.
 * La fonction registerView est déclenchée par le routeur lorsqu'un utilisateur accède à la page d'inscription.
 * Elle utilise res.render("register") pour afficher la vue register.ejs au navigateur de l'utilisateur.
 * module.exports exporte toutes les fonctions du contrôleur pour qu'elles soient accessibles depuis le routeur.
 */

module.exports = {
    // La vue register
    registerView: (req, res) => {
        res.render("register");
    }
}