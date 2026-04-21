// User.js est un modéle qui sert a créer des utilisateurs. Les modéle User est de : id,email et password
const { DataTypes } = require("sequelize");

const sequelize = require("../db");

module.exports = sequelize.define("user", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
    },
});