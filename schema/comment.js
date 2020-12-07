const { gql } = require('apollo-server-express');

const Comment = gql`
	type Comment {
		id: ID!
		text: String!
		userId: String!
		postId: String!
		createdAt: String
		user: User
	}
`;

module.exports = { Comment };
