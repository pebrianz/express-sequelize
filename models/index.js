"use strict";
import { readdirSync } from "fs";
import { dirname, basename } from "path";
import { Sequelize, DataTypes } from "sequelize";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const env = process.env.node_env || "development";
let config = await import(__dirname + "./../config/config.js");
config = config.default[env];

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

export default (async () => {
  const db = {};
  const files = readdirSync(__dirname).filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename(__filename) &&
      file.slice(-3) === ".js"
    );
  });

  for await (const file of files) {
    const model = await import(`./${file}`).then((model) =>
      model.default(sequelize, DataTypes)
    );
    db[model.name] = model;
  }

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  return db;
})();
