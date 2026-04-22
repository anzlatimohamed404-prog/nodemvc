// User.js est un modèle qui sert à créer des utilisateurs.
// Le modèle User est composé de : id, email et password

// Importe le type de données Sequelize pour définir les types des colonnes
const { DataTypes } = require("sequelize");

// Importe la connexion à la base de données
const sequelize = require("../db");

// Définit et exporte directement le modèle User avec ses colonnes
module.exports = sequelize.define("user", {
    // Identifiant unique auto-incrémenté, clé primaire de la table
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    // Email de l'utilisateur, doit être unique dans la base de données
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
    // Mot de passe de l'utilisateur
    password: {
        type: DataTypes.STRING,
    }
});

// ✅ "return UserModel" supprimé : module.exports exporte déjà le modèle directement
