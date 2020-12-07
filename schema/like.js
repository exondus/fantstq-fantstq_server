const { gql } = require('apollo-server-express');

const Like = gql`
	type Like {
		id: ID!
		post: Post
		userId: String!
	}
`;

module.exports = { Like };
