const { gql } = require('apollo-server-express');

const LeagueProfile = gql`
	type LeagueProfile {
		id: ID!
		name: String!
		description: String!
		profile: String!
		logo: String!
		country: String!
		currentChampion: Team
	}
`;

module.exports = { LeagueProfile };
