const passport =require('passport');
const User=  require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: config.secret
};

//create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
	User.findById(payload.sub, function(err, user){
		if(err){return done(err, false);}
		if(user){
			done(null, usser);
		} else{
			done(null, false);
		}
	});
});

//tell passporrt to use this strategy
passport.use(jwtLogin);