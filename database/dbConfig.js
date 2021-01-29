<<<<<<< HEAD
const knex = require("knex");
=======
const knex = require('knex')('production')
>>>>>>> f185a8a66dac13dc43bf53533f79379f8305c02d

const knexConfig = require("../knexfile.js");

const environment = process.env.DB_ENV || "development";

module.exports = knex(knexConfig[environment]);
