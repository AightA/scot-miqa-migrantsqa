const passport = require("passport");
const passportJWT = require("passport-jwt");
const { ExtractJwt, Strategy: JwtStrategy } = passportJWT;
const db = require("../services/database/users");

const config = {};
config.secretOrKey = process.env.JWT_SECRET || "your_jwt_secret";
config.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken("authorization");

passport.use(
	new JwtStrategy(config, async (jwtPayload, done) => {
		console.log('jwtPayload', jwtPayload);
		try {
			const user = await db.getUserById(jwtPayload.userId);
			if (user) {
				done(null, user);
			} else {
				done(null, false);
			}
		} catch (e) {
			done(e, false);
		}
	})
);


const authMiddleware = passport.authenticate('jwt', { session: false });

module.exports = { authMiddleware };