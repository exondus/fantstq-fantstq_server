const { gql } = require('apollo-server-express');

const Match = gql`
	type Match {
		id: ID!
		name: String!
		homeTeam: Team!
		awayTeam: Team!
		score: Score
	}
`;

module.exports = { Match };
