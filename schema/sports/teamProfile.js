const { gql } = require('apollo-server-express');

const TeamProfile = gql`
	type TeamProfile {
		id: ID!
		name: String!
		nickname: String!
		logo: String!
		country: String!
		venue: Venue!
		chairman: String!
		established: Int!
		story: String!
		honors: String!
	}
`;

module.exports = { TeamProfile };
