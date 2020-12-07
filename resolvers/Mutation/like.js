const { Like, Post, sequelize } = require('../../models');
const { getUserId } = require('../../utils/userAuthorization');

const like = {
	async like(_, { postId }, context) {
		try {
			const userId = getUserId(context);
			const post = await Post.findOne({
				where: { id: postId, userId },
			});

			if (!userId) {
				throw new Error('You are not authorised!');
			}

			if (!post) {
				throw new Error('Post does not exist!');
			}

			if (user.likes.find((like) => like.postId == postId)) {
				throw new Error('You cannot like a post twice');
			}

			const newLike = Like.create({ userId, postId });
			return newLike.id;
		} catch (err) {
			console.log(err);
		}
	},
	async unLike(_, { postId }, context, info) {
		const userId = getUserId(context);
		const like = await Like.findOne({
			where: { userId, postId },
		});

		if (userId && like && like.userId == userId) {
			const removed = await Like.destroy();

			if (removed) {
				return like.id;
			}

			throw new Error('Not authorized');
		}
		throw new Error('Like not found');
	},
};

module.exports = { like };
