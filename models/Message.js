"use strict";
//const { Model } = require("sequelize");
//module.exports = (sequelize, DataTypes) => {
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
        hooks: true,
      });
      this.belongsTo(models.Room, {
        foreignKey: "room_id",
        onDelete: "CASCADE",
        hooks: true,
      });
    }
  }
  Message.init(
    {
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      fields: ["content"],
      sequelize,
      modelName: "Message",
      underscored: true,
    }
  );
  return Message;
};
