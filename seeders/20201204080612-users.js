'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'Users',
			[
				{
					fullName: 'Lichaba Nthethe',
					userHandle: 'LichabZZ',
					email: 'lichaba@example.com',
					password_digest: 'pass123456',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					fullName: 'Sello Mashiya',
					userHandle: 'ZileMash',
					email: 'zilemash@example.com',
					password_digest: 'pass123456',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					fullName: 'Sbudda Sibeko',
					userHandle: 'Sbuddah',
					email: 'sbu@example.com',
					password_digest: 'pass123456',
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
