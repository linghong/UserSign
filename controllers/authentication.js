const User =require('../models/user');

exports.signup = function(req, res, next){
	const email =req.body.email;
	const password =req.body.password;
		
	User.findOne({email: email}, function(err, existingUser){
		if(err){return next(err);}
		
		//if a user with the given email exists
		if(existingUser){
			return res.status(422).send({error: 'Email exists'});
		}

		//if the user email does not exist
		const user = new User({
			email: email,
			password: password
		});
		user.save(function(err){
			if(err) {return next(err);}

			res.json(user);
		});
	});


	//if a user with the given email doesn't exist
	
}