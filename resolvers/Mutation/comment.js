const { Comment, Post } = require('../../models');
const { pubSub } = require('../../src/pubSub');
const { getUserId } = require('../../utils/userAuthorization');

const comment = {
	async addComment(_, { text, postId }, context) {
		const userId = getUserId(context);

		console.log('USER ID', userId);

		if (!userId || !postId) {
			throw new Error('Cannot find user or post');
		}

		const postToCommentOn = await Post.findOne({
			where: { id: postId },
		});

		console.log('POST TO COMMENT ON', postToCommentOn);

		const comment = await Comment.create({
			postId,
			userId,
			text,
		});

		pubSub.publish('commentCreated', {
			postAdded: { id: comment.id, text },
		});

		return comment;
	},
	async deleteComment(_, { id }, context) {},
};

module.exports = { comment };
