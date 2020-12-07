const { gql } = require('apollo-server-express');

const { User } = require('./user');
const { AuthPayload } = require('./authpayload');
const { Comment } = require('./comment');
const { Post } = require('./post');
const { Like } = require('./like');

const { Fixture } = require('./sports/fixture');
const { Match } = require('./sports/match');
const { League } = require('./sports/league');
const { LeagueProfile } = require('./sports/leagueProfile');
const { Player } = require('./sports/player');
const { Referee } = require('./sports/referee');
const { Score } = require('./sports/score');
const { Team } = require('./sports/team');
const { TeamProfile } = require('./sports/teamProfile');
const { Venue } = require('./sports/venue');
const { Standing } = require('./sports/standing');

const Query = gql`
	type Query {
		me: User!
		currentUser: User
		getAllUsers: [User!]!
		posts: [Post!]!
		post(id: ID!): Post
		getAllComments: [Comment!]!
		comment(id: ID!): Comment
	}
`;

const Mutation = gql`
	type Mutation {
		signUp(
			fullName: String!
			userHandle: String!
			email: String!
			password: String!
			confirmPassword: String!
		): AuthPayload
		signIn(email: String!, password: String!): AuthPayload
		addPost(content: String, image: String): Post
		editPost(id: ID!, content: String, image: String): Post
		deletePost(id: ID!): ID
		addComment(text: String!, postId: String!): Comment
		deleteComment(id: String!): ID
		like(postId: String!): ID
		unLike(postId: ID!): ID
	}
`;

const Subscription = gql`
	type Subscription {
		postAdded: Post
		postEdited: Post
		postDeleted: ID
		postLiked: ID
		postUnLiked: ID
	}
`;

module.exports = {
	typeDefs: [
		Query,
		Mutation,
		Subscription,
		User,
		AuthPayload,
		Post,
		Comment,
		Like,
		Fixture,
		Match,
		League,
		LeagueProfile,
		Player,
		Referee,
		Score,
		Team,
		TeamProfile,
		Venue,
		Standing,
	],
};
