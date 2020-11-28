const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type Post {
		content: String!
		image: String
		id: ID!
	}

	type Comment {
		id: ID!
		text: String!
		userId: String!
		postId: String!
	}

	type User {
		id: ID!
		userHandle: String!
		fullName: String!
		email: String!
	}

	type Query {
		posts: [Post]
		post(id: ID!): Post
	}

	type Mutation {
		addPost(content: String, image: String): ID
		editPost(id: ID!, content: String, image: String): Post
		deletePost(id: ID!): ID
		uploadImage(filename: String!, id: Int!): String!
	}

	type Subscription {
		postAdded: Post
		postEdited: Post
		postDeleted: ID
	}
`;

module.exports = typeDefs;
