const { Post, User, Like, Comment, sequelize } = require('../models');
const {} = require("../utils/userAuthorization");

const posts = async () => {
	const posts = await Post.findAll({ order: [['id', 'DESC']] });

	return posts;
};

const post = async (_, { id }) => {
	const post = await Post.findOne({
		where: { id: id },
	});

	return post;
};

module.exports = { posts, post };
