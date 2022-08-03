"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Message, {
        foreignKey: "room_id",
        onDelete: "CASCADE",
        hooks: true,
      });
    }
  }
  Room.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      fields: ["name", "password"],
      sequelize,
      modelName: "Room",
      underscored: true,
    }
  );
  return Room;
};
