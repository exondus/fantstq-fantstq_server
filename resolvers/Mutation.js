const { Post } = require('../models');
const { pubSub } = require('../src/pubSub');

const addPost = async (_, { content, image }) => {
	const post = await Post.create({ content, image });

	pubSub.publish('postAdded', {
		postAdded: { id: post.id, content, image },
	});

	return post.id;
};

const editPost = async (_, { id, content, image }) => {
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
};

const deletePost = async (_, { id }) => {
	const deleted = await Post.destroy({
		where: { id: id },
	});

	if (deleted) {
		pubSub.publish('postDeleted', { postDeleted: id });
		return id;
	}

	return new Error('Post not deleted');
};

module.exports = {
	addPost,
	editPost,
	deletePost,
};
