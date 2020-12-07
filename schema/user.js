const { gql } = require('apollo-server-express');

const User = gql`
	type User {
		id: ID!
		userHandle: String!
		fullName: String!
		email: String!
		password: String
		likes: [Like]!
		posts: [Post]!
		comments: [Comment]!
	}
`;

module.exports = { User };
