/**
 * Ce fichier est un contrôleur dans l'architecture MVC (Modèle-Vue-Contrôleur).
 * Il contient la logique métier associée aux pages de l'application.
 * La fonction accueilViews est déclenchée par le routeur lors d'une requête sur la route d'accueil.
 * Elle utilise res.render('accueil') pour afficher la vue correspondante au fichier accueil.ejs,
 * qui génère le HTML final renvoyé et affiché dans le navigateur de l'utilisateur.
 * module.exports exporte cette fonction pour qu'elle soit utilisable depuis le fichier de routes.
 */

module.exports = {
    accueilViews: (req, res) => {
        res.render('accueil');
    }
}