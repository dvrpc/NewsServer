// DB Index
const sequelize = require("sequelize");
const debug = require("debug")("sql");
require("dotenv").config();

const PG_USER = encodeURIComponent(process.env.PG_USER);
const PG_PASS = encodeURIComponent(process.env.PG_PASS);
const PG_HOST = process.env.PG_HOST;
const PG_PORT = process.env.PG_PORT;
const PG_DB = process.env.PG_DB;
const connectionString = `postgres://${PG_USER}:${PG_PASS}@${PG_HOST}:${PG_PORT}/${PG_DB}`;

const db = (module.exports = new sequelize(connectionString, {
  logging: debug,
  operatorsAliases: false,
}));

// run our model definitions after creating the jawn
require("./models.js");

// sync the db. force true for now to create/recreate w/dummy data
//@TODO: remember to change to force=FALSE once this is up and running
function sync(force = false) {
  return db
    .sync({ force })
    .then((_) => console.log("synced models to db ", connectionString))
    .catch((fail) => {
      console.log("db failed to sync because: ", fail);
    });
}

db.didSync = sync();
