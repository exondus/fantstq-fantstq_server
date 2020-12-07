const { gql } = require('apollo-server-express');

const Post = gql`
	type Post {
		id: ID!
		content: String
		image: String
		comments: [Comment]
		likes: [Like]!
		userId: String!
		user: User
		createdAt: String
		updatedAt: String
	}
`;

module.exports = { Post };
