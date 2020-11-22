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
			Post.hasMany(models.Comment, {
				foreignKey: 'postId',
				as: 'comments',
			}),
				Post.hasMany(models.Likes, {
					foreignKey: 'postId',
					as: 'likes',
				}),
				Post.belongsTo(models.User, {
					foreignKey: 'userId',
					as: 'user',
				});
		}
	}
	Post.init(
		{
			content: DataTypes.STRING,
			image: DataTypes.STRING,
			userId: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Post',
		}
	);
	return Post;
};
