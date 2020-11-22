'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Comment extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Comment.belongsTo(models.Post, {
				foreignKey: 'postId',
				as: 'post',
				onDelete: 'CASCADE',
			}),
				Comment.belongsTo(models.User, {
					foreignKey: 'userId',
					as: 'user',
					onDelete: 'CASCADE',
				});
		}
	}
	Comment.init(
		{
			text: DataTypes.STRING,
			userId: DataTypes.STRING,
			postId: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Comment',
		}
	);
	return Comment;
};
