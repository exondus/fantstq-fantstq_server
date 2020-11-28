const { Post, User, Like, Comment, sequelize } = require('../models');
const { getUserId, mapAttributes } = require('../utils');

const posts = async () => {
	const posts = await Post.findAll({ order: [['id', 'DESC']] });

	return posts;
};

const post = async (_, { id }) => {
	const post = await Post.findOne({
		where: { id: id },
		include: [
			{
				model: Comment,
				as: 'comments',
				attributes: mapAttributes(Comment, info),
				include: [
					{
						model: User,
						as: 'users',
						attributes: mapAttributes(User, info),
					},
					{
						model: Like,
						as: 'likes',
						attributes: mapAttributes(Like, info),
					},
				],
			},
		],
	});

	return post;
};

const currentUser = async (_, args, context, info) => {
	const userId = getUserId(context);
	if (userId) {
		const user = await User.findOne({
			where: { id: userId },
			include: [
				{
					model: Post,
					as: 'posts',
					attributes: mapAttributes(Post, info),
					include: [
						{
							model: Comment,
							as: 'comments',
							attributes: mapAttributes(Comment, info),
							include: [
								{
									model: Like,
									as: 'likes',
									attributes: mapAttributes(Like, info),
								},
							],
						},
						{
							model: Like,
							as: 'likes',
							attributes: mapAttributes(Like, info),
						},
					],
				},
			],
		});
		return user;
	}
	throw new Error('User not found');
};

module.exports = { posts, post };
