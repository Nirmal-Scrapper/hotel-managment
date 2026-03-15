const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Room = sequelize.define(
  'Room',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    room_no: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    room_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    room_size: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    is_available_from: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    is_available_to: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    hotel_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'rooms',
    timestamps: false,
  }
);

module.exports = Room;

