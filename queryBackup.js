const { Post, User, Like, Comment, sequelize } = require('./models');
const { mapAttributes } = require('./utils/mapAttributes');
const { getUserId } = require('./utils/userAuthorization');

const posts = async (_, __, ___, info) => {
	const posts = await Post.findAll({
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
};

const post = async (_, { id }, ___, info) => {
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
};

const currentUser = async (_, __, context, info) => {
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
};

const me = async (_, __, context, info) => {
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
};

const getAllUsers = async () => {
	const users = await User.findAll();

	return users;
};

const getAllComments = async () => {
	const comments = await Comment.findAll();

	return comments;
};

const comment = async (_, { id }, ___, info) => {
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
};

module.exports = { posts, post, currentUser, getAllUsers, getAllComments, comment, me };
