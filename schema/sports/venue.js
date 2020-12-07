const { gql } = require('apollo-server-express');

const Venue = gql`
	type Venue {
		id: ID!
		name: String!
		description: String!
		capacity: Int!
		recordAttendance: Int!
		established: Int!
		province: String!
		city: String!
		address: String!
		latitude: Int!
		longitude: Int!
		homeTeam: Team!
		highlights: [Match]
	}
`;

module.exports = { Venue };
