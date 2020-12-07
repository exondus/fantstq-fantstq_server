const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { execute, subscribe } = require('graphql');
const { createServer } = require('http');
const { makeExecutableSchema } = require('graphql-tools');
const { SubscriptionServer } = require('subscriptions-transport-ws');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const resolvers = require('../resolvers');
const typeDefs = require('../schema/typeDefs');
const { pubSub } = require('./pubSub');

const port = process.env.PORT || 9000;

const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
});

const apolloServer = new ApolloServer({
	schema,
	context: (request) => {
		return {
			...request,
			pubSub,
		};
	},
	introspection: true,
	playground: {
		endpoint: '/graphql',
	},
});

const app = express();
const server = createServer(app);
apolloServer.applyMiddleware({ app });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

server.listen({ port }, () => {
	console.log(`Server is running at http://localhost:${port}`);
	new SubscriptionServer(
		{
			schema,
			execute,
			subscribe,
			keepAlive: 10000,
		},
		{
			server: server,
		}
	);
});
