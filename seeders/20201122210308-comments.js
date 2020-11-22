'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'Comments',
			[
				{
					text:
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dignissimos numquam soluta facere, ducimus magnam odio, dolore, placeat cumque voluptates accusantium autem magni voluptate quasi facilis accusamus adipisci a ea.',
					postId: 1,
					userId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					text:
						'Ducimus magnam odio, dolore, placeat cumque voluptates accusantium autem magni voluptate quasi facilis.',
					postId: 1,
					userId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					text:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam laudantium obcaecati ex neque sapiente voluptate est repellendus exercitationem sequi! Magni necessitatibus dignissimos, explicabo aliquid nobis quibusdam harum fugiat porro nisi.',
					postId: 2,
					userId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					text:
						'Voluptate est repellendus exercitationem sequi! Magni necessitatibus dignissimos, explicabo aliquid nobis quibusdam.',
					postId: 2,
					userId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					text:
						'Voluptate est repellendus exercitationem sequi! Magni necessitatibus dignissimos, explicabo aliquid nobis quibusdam.',
					postId: 3,
					userId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					text:
						'Voluptate est repellendus exercitationem sequi! Magni necessitatibus dignissimos, explicabo aliquid nobis quibusdam.',
					postId: 3,
					userId: 2,
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
