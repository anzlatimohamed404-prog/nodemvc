// Importation de la configuration de base de données depuis le fichier db.config.js
const dbConfig = require("../config/db.config");

// Importation du module Sequelize pour l'ORM (Object-Relational Mapping)
const Sequelize = require("sequelize");

// Création d'une instance Sequelize avec les paramètres de configuration
// Paramètres : nom de la base de données, utilisateur, mot de passe, options
const sequelize = new Sequelize(
    // Nom de la base de données extrait de la configuration
    dbConfig.BD,
    // Nom d'utilisateur pour la connexion à la base de données
    dbConfig.USER,
    // Mot de passe pour la connexion à la base de données
    dbConfig.PASSWORD, {
        // Hôte de la base de données (généralement localhost)
        host: dbConfig.HOST,
        // Dialecte de la base de données (mysql, postgres, sqlite, etc.)
        dialect: dbConfig.dialect,

        // Configuration du pool de connexions pour optimiser les performances
        pool: {
            // Nombre maximum de connexions dans le pool
            max: dbConfig.pool.max,
            // Nombre minimum de connexions dans le pool
            min: dbConfig.pool.min,
            // Temps maximum en millisecondes pour acquérir une connexion
            acquire: dbConfig.pool.idle
        }
    }
);

// Initialisation d'un objet vide pour contenir tous les modèles et la connexion
const db = {};

// Attribution de la classe Sequelize à l'objet db pour un accès global
db.Sequelize = Sequelize;

// Attribution de l'instance sequelize à l'objet db pour les opérations de base de données
db.sequelize = sequelize;

// Importation et attribution du modèle User à l'objet db
db.user = require("./User");

// Exportation de l'objet db pour qu'il soit utilisable dans d'autres fichiers
module.exports = db;