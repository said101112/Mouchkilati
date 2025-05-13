require("dotenv").config();
const { Pool } = require("pg");

  pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: false
  });
  console.log("💻 Connexion à la base de données Locale...");

module.exports = pool;