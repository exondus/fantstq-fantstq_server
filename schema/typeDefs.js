const { gql } = require('apollo-server-express');

const typeDefs = gql`
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

	type Comment {
		id: ID!
		text: String!
		userId: String!
		postId: String!
		createdAt: String
		user: User
	}

	type Like {
		id: ID!
		post: Post
		userId: String!
	}

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

	type AuthPayload {
		token: String
		user: User
	}

	type Query {
		me: User!
		currentUser: User
		getAllUsers: [User!]!
		posts: [Post!]!
		post(id: ID!): Post
		getAllComments: [Comment!]!
		comment(id: ID!): Comment
	}

	type Mutation {
		signUp(
			fullName: String!
			userHandle: String!
			email: String!
			password: String!
			confirmPassword: String!
		): AuthPayload
		signIn(email: String!, password: String!): AuthPayload
		addPost(content: String, image: String): ID
		editPost(id: ID!, content: String, image: String): Post
		deletePost(id: ID!): ID
		addComment(text: String!, postId: String!): Comment
		deleteComment(id: String!): ID
		like(postId: String!): ID
		unLike(postId: ID!): ID
	}

	type Subscription {
		postAdded: Post
		postEdited: Post
		postDeleted: ID
		postLiked: ID
		postUnLiked: ID
	}
`;

module.exports = typeDefs;
