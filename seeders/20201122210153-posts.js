'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'Posts',
			[
				{
					content:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. A impedit, itaque nobis incidunt ipsa, vitae deserunt nostrum nisi ex, sunt repellat? Vitae numquam quae sunt debitis libero atque hic obcaecati.',
					image:
						'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60',
					userId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					content:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, omnis. Nobis omnis fuga magni velit, delectus cumque optio non exercitationem, sapiente maiores, corrupti possimus? Sequi quas nulla alias quidem magni.',
					image:
						'https://images.unsplash.com/photo-1545996124-0501ebae84d0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fGZhY2V8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60',
					userId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					content:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum cupiditate, iusto illum ipsam repellendus consequatur totam magnam id illo voluptatibus odio neque omnis amet deserunt porro placeat mollitia, incidunt voluptas.',
					image:
						'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60',
					userId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					content:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laudantium repellendus officiis deleniti quas! Quam iusto ut culpa, quia tempore nesciunt accusamus voluptatibus, reprehenderit neque, harum nemo libero repudiandae quaerat.',
					image:
						'https://images.unsplash.com/photo-1571512599285-9ac4fdf3dba9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzJ8fGZhY2V8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60',
					userId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					content:
						'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae hic distinctio voluptatibus sed veritatis repellat corrupti culpa temporibus amet quam commodi reprehenderit, aut nesciunt mollitia ab. Quod porro voluptas voluptate.',
					image:
						'https://images.unsplash.com/photo-1545996124-0501ebae84d0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fGZhY2V8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60',
					userId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					content:
						'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsam ullam architecto nemo blanditiis eius provident cupiditate consectetur reprehenderit necessitatibus possimus temporibus tempora, nobis cum veniam molestias doloribus ea tempore!',
					image:
						'https://images.unsplash.com/photo-1571512599285-9ac4fdf3dba9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzJ8fGZhY2V8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60',
					userId: 3,
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
