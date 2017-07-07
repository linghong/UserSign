const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define model
const userSchema = new Schema({
	email: { type: String, unique: true, lowercase: true },
	password: String
});

//create the model class, represents all users
const User = mongoose.model("user", userSchema);

module.exports = User;