const { gql } = require('apollo-server-express');

const Score = gql`
	type Score {
		id: ID!
		halfTime: String!
		fullTime: String!
		extraTime: String
		penalty: String
	}
`;

module.exports = { Score };
