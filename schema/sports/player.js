const { gql } = require('apollo-server-express');

const Player = gql`
	type Player {
		id: ID!
		name: String!
		team: [Team!]!
		goals: Int!
	}
`;

module.exports = { Player };
