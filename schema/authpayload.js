const { gql } = require('apollo-server-express');

const AuthPayload = gql`
	type AuthPayload {
		token: String
		user: User
	}
`;

module.exports = { AuthPayload };
