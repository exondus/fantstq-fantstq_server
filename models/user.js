'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			User.hasMany(models.Post, {
				foreignKey: 'userId',
				as: 'posts',
			}),
				User.hasMany(models.Comment, {
					foreignKey: 'userId',
					as: 'comments',
				}),
				User.hasMany(models.Like, {
					foreignKey: 'userId',
					as: 'likes',
				});
		}
	}
	User.init(
		{
			fullName: DataTypes.STRING,
			userHandle: DataTypes.STRING,
			email: DataTypes.STRING,
			password_digest: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'User',
		}
	);
	return User;
};
