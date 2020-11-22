'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'Likes',
			[
				{
					postId: 1,
					userId: 2,
					commentId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					postId: 1,
					userId: 3,
					commentId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					postId: 2,
					userId: 1,
					commentId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					postId: 2,
					userId: 3,
					commentId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					postId: 3,
					userId: 1,
					commentId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
