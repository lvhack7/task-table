const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Deal = require('./deal');

const Forwarder = sequelize.define('Forwarder', {
  name: { type: DataTypes.TEXT },
  groupCompany: { type: DataTypes.TEXT },
  plannedRailwayTariff: { type: DataTypes.TEXT },
  cargoAmountMT: { type: DataTypes.TEXT },
  accruedAmount: { type: DataTypes.TEXT },
  actualRailwayTariff: { type: DataTypes.TEXT },
  actualShippedVolumeMT: { type: DataTypes.TEXT },
  actualVolumeInvoiceMT: { type: DataTypes.TEXT },
  invoiceAmountActualVolume: { type: DataTypes.TEXT },
  security: { type: DataTypes.TEXT },
  excessHigh: { type: DataTypes.TEXT },
  excessTransferred: {type: DataTypes.TEXT},
  penaltiesHigh: { type: DataTypes.TEXT },
  penaltiesTransferred: {type: DataTypes.TEXT},
  additionalCosts: { type: DataTypes.TEXT }
});

Forwarder.belongsTo(Deal, { foreignKey: 'dealId' });
module.exports = Forwarder;