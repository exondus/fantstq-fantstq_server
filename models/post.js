'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Post extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Post.belongsTo(models.User, {
				foreignKey: 'userId',
				as: 'user',
				onDelete: 'CASCADE',
			});
			Post.hasMany(models.Like, {
				foreignKey: 'postId',
				as: 'likes',
			});
			Post.hasMany(models.Comment, {
				foreignKey: 'postId',
				as: 'comments',
			});
		}
	}
	Post.init(
		{
			content: DataTypes.STRING,
			image: DataTypes.STRING,
			userId: DataTypes.INTEGER,
			createdAt: DataTypes.DATE,
			updatedAt: DataTypes.DATE,
		},
		{
			sequelize,
			modelName: 'Post',
		}
	);
	return Post;
};
