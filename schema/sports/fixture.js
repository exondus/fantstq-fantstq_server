const { gql } = require('apollo-server-express');

const Fixture = gql`
	type Fixture {
		id: ID!
		league: League!
		eventDate: String!
		timestamp: Int!
		firstHalf: Int!
		secondHalf: Int!
		round: String!
		status: String!
		statusShort: String!
		elapsed: Int!
		referee: Referee!
		homeTeam: Team!
		awayTeam: Team!
		goalsHomeTeam: Int!
		goalsAwayTeam: Int!
		score: Score!
	}
`;

module.exports = { Fixture };
