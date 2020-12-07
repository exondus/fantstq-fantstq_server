const { Post, User, Like, Comment, sequelize } = require('../../models');
const { mapAttributes } = require('../../utils/mapAttributes');
const { getUserId } = require('../../utils/userAuthorization');

const user = {
	async me(_, __, context, info) {
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
	},
	async getAllUsers() {
		const users = await User.findAll();

		return users;
	},
};

module.exports = { user };
