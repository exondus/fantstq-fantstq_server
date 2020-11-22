const { Post, sequelize } = require('../models');

const posts = async () => {
	const posts = await Post.findAll({ order: [['id', 'DESC']] });

	return posts;
};

module.exports = { posts };
