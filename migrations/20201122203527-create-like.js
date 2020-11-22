'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Likes', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			userId: {
				type: Sequelize.STRING,
				onDelete: 'CASCADE',
				references: {
					model: 'Users',
					key: 'id',
					as: 'userId',
				},
			},
			postId: {
				type: Sequelize.STRING,
				onDelete: 'CASCADE',
				references: {
					model: 'Posts',
					key: 'id',
					as: 'postId',
				},
			},
			commentId: {
				type: Sequelize.STRING,
				onDelete: 'CASCADE',
				references: {
					model: 'Comments',
					key: 'id',
					as: 'commentId',
				},
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('Likes');
	},
};
