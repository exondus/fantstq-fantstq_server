//const { like } = require('./Mutation/like');
const { user } = require('./user');
const { post } = require('./post');
const { comment } = require('./comment');

module.exports = {
	...post,
	...comment,
	...user,
};
