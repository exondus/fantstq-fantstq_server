const Query = require('./Queries');
const Subscription = require('./Subscription');
const { auth } = require('./Mutation/auth');
const { like } = require('./Mutation/like');
const { post } = require('./Mutation/post');
const { comment } = require('./Mutation/comment');

module.exports = {
	Query,
	Subscription,
	Mutation: {
		...auth,
		...post,
		...like,
		...comment,
	},
};
