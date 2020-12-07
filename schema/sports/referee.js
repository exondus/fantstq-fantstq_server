const { gql } = require('apollo-server-express');

const Referee = gql`
	type Referee {
		id: ID!
		name: String!
		fixtures: [Fixture!]!
		matches: [Match!]!
	}
`;

module.exports = { Referee };
