const { User, sequelize } = require('../../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const auth = {
	async signUp(_, { userHandle, email, fullName, password, confirmPassword }) {
		try {
			const userExists = await User.findOne({ where: { email } });

			if (userExists) {
				throw new Error('That email is already in use.');
			}

			if (password !== confirmPassword) {
				throw new Error('Credentials do not match');
			}

			const password_digest = await bcrypt.hash(password, 10);
			const user = await User.create({
				userHandle,
				fullName,
				email,
				password_digest,
			});

			const payload = {
				id: user.id,
				userHandle: user.userHandle,
				email: user.email,
			};

			const token = jwt.sign(payload, process.env.APP_SECRET);

			return { user, token };
		} catch (err) {
			throw new Error(err.message);
		}
	},
	async signIn(_, { email, password }) {
		try {
			if (email) {
				const user = await User.findOne({
					where: { email },
				});

				if (await bcrypt.compare(password, user.dataValues.password_digest)) {
					const payload = {
						id: user.id,
						email: user.email,
					};

					const token = jwt.sign(payload, process.env.APP_SECRET);
					return { user, token };
				}
				throw new Error('Invalid credentials');
			}
			throw new Error('Invalid credentials');
		} catch (err) {
			throw new Error(err.message);
		}
	},
};

module.exports = { auth };
