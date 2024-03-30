const Sequelize = require("sequelize");

// Change password to correct one
const sequelize = new Sequelize("node-complete", "root", "Your_Password", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
