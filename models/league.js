'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class League extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	League.init(
		{
			profileId: DataTypes.STRING,
			season: DataTypes.INTEGER,
			standingId: DataTypes.STRING,
			teams: DataTypes.STRING,
			scorers: DataTypes.STRING,
			players: DataTypes.STRING,
			referees: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'League',
		}
	);
	return League;
};
