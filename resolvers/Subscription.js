const { pubSub } = require('../src/pubSub');

const postAdded = {
	subscribe: () => pubSub.asyncIterator('postAdded'),
};

const postEdited = {
	subscribe: () => pubSub.asyncIterator('postEdited'),
};

const postDeleted = {
	subscribe: () => pubSub.asyncIterator('postDeleted'),
};

const postLiked = {
	subscribe: () => pubSub.asyncIterator('postLiked'),
};

const postUnLiked = {
	subscribe: () => pubSub.asyncIterator('postLiked'),
};

module.exports = { postAdded, postEdited, postDeleted, postLiked, postUnLiked };
