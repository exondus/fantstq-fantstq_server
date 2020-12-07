const { gql } = require('apollo-server-express');

const League = gql`
	type League {
		id: ID!
		profile: LeagueProfile!
		season: Int!
		standings: String!
		teams: [Team!]!
		fixtures: [Fixture!]!
		scorers: [Player!]!
		players: [Player!]!
		referees: [Referee!]!
	}
`;

module.exports = { League };
