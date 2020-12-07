const { Post, User, Like, Comment, sequelize } = require('../../models');
const { mapAttributes } = require('../../utils/mapAttributes');
const { getUserId } = require('../../utils/userAuthorization');

const comment = {
	async getAllComments() {
		const comments = await Comment.findAll();

		return comments;
	},
	async comment(_, { id }, ___, info) {
		const chosenComment = await Comment.findOne({
			where: { id },
			include: [
				{
					model: User,
					as: 'user',
					attributes: mapAttributes(User, info),
				},
				{
					model: Post,
					as: 'post',
					attributes: mapAttributes(Post, info),
				},
			],
		});

		return chosenComment;
	},
};

module.exports = { comment };
