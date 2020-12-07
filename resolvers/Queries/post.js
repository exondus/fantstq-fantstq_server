const { Post, User, Like, Comment, sequelize } = require('../../models');
const { mapAttributes } = require('../../utils/mapAttributes');

const post = {
	async posts(_, __, ___, info) {
		posts = await Post.findAll({
			order: [['id', 'DESC']],
			include: [
				{
					model: Comment,
					as: 'comments',
					attributes: mapAttributes(Comment, info),
					include: [
						{
							model: User,
							as: 'user',
							attributes: mapAttributes(User, info),
						},
					],
				},
				{
					model: Like,
					as: 'likes',
					attributes: mapAttributes(Like, info),
				},
				{
					model: User,
					as: 'user',
					attributes: mapAttributes(User, info),
				},
			],
		});

		if (posts.comments === [] || posts.likes === []) {
			return null;
		}

		return posts;
	},
	async post(_, { id }, ___, info) {
		const post = await Post.findOne({
			where: { id: id },
			include: [
				{
					model: Comment,
					as: 'comments',
					attributes: mapAttributes(Comment, info),
				},
				{
					model: User,
					as: 'user',
					attributes: mapAttributes(User, info),
				},
				{
					model: Like,
					as: 'likes',
					attributes: mapAttributes(Like, info),
				},
			],
		});

		return post;
	},
};

module.exports = { post };
