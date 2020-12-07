const { Post } = require('../../models');
const { pubSub } = require('../../src/pubSub');
const { getUserId } = require('../../utils/userAuthorization');

const post = {
	async addPost(_, { content, image }, context) {
		const userId = getUserId(context);

		const post = await Post.create({ content, image, userId });

		pubSub.publish('postAdded', {
			postAdded: { id: post.id, content, image },
		});

		return post.id;
	},
	async editPost(_, { id, content, image }) {
		//TODO: Validate user

		const [updated] = await Post.update(
			{ content, image },
			{
				where: { id: id },
			}
		);

		if (updated) {
			const updatedPost = await Post.findOne({ where: { id: id } });
			pubSub.publish('postEdited', { postEdited: updatedPost });
			return updatedPost;
		}

		return new Error('Post not updated');
	},
	async deletePost(_, { id }) {
		//TODO: Validate user
		const deleted = await Post.destroy({
			where: { id: id },
		});

		if (deleted) {
			pubSub.publish('postDeleted', { postDeleted: id });
			return id;
		}

		return new Error('Post not deleted');
	},
};

module.exports = {
	post,
};
