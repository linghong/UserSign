const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt =require('bcrypt-nodejs');

//define model
const userSchema = new Schema({
	email: { type: String, unique: true, lowercase: true },
	password: String
});

//encrypt password
userSchema.pre('save', function(next){
	const user =this;

	//generate a salt
	bcrypt.genSalt(10, function(err, slat){
		if(err){ return next(err);}
		//encrypt password using the salt
		bcrypt.hash(user.password, slat, null, function(err, hash){
			if(err){ return next(err);}
			user.password =hash;
			//go ahead and save
			next();
		})
	})
})

//create the model class, represents all users
const User = mongoose.model("user", userSchema);

module.exports = User;