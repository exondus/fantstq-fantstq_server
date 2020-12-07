const { gql } = require('apollo-server-express');

const Team = gql`
	type Team {
		id: ID!
		profile: TeamProfile!
		champion: Boolean!
		fixtures: [Fixture!]!
		league: League
	}
`;

module.exports = { Team };
