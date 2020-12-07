const jwt = require('jsonwebtoken');

function getUserId(context) {
	const authorization = context.req.headers['authorization'];
	try {
		if (authorization) {
			const token = authorization.replace('Bearer ', '');
			const user = jwt.verify(token, process.env.APP_SECRET);
			return user.id;
		}
	} catch (err) {
		throw new Error(err.message);
	}
}

module.exports = { getUserId };
