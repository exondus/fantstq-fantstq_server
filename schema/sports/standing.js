const { gql } = require('apollo-server-express');

const Standing = gql`
	type Standing {
		id: ID!
		league: League!
		teams: [Team!]!
	}
`;

module.exports = { Standing };
