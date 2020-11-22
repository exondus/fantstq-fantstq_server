'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Like extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Like.belongsTo(models.User, {
				foreignKey: 'userId',
				onDelete: 'CASCADE',
				as: 'user',
			}),
				Like.belongsTo(models.Post, {
					foreignKey: 'postId',
					onDelete: 'CASCADE',
					as: 'post',
				}),
				Like.belongsTo(models.Comment, {
					foreignKey: 'commentId',
					onDelete: 'CASCADE',
					as: 'comment',
				});
		}
	}
	Like.init(
		{
			userId: DataTypes.STRING,
			postId: DataTypes.STRING,
			commentId: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Like',
		}
	);
	return Like;
};
