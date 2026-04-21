
// On importe la bibliothèque Sequelize pour interagir avec la base de données
const Sequelize = require("sequelize");

// On crée une nouvelle instance de Sequelize (connexion à la base de données)
const sequelize = new Sequelize(
  'maygourmet',      // Nom de la base de données
  'root',            // Nom d'utilisateur MySQL
  'Irwane24019',     // Mot de passe MySQL
  {                  // Objet de configuration
    host: "localhost", // Adresse du serveur de base de données (ici en local)
    dialect: "mysql"   // Type de base de données utilisée (MySQL)
  }
);

// On exporte la connexion pour pouvoir l'utiliser dans d'autres fichiers
module.exports = sequelize;