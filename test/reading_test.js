const assert = require('assert');
const User = require('../models/user');

describe('Reading users out of the database', ()=>{
	let fred;
	beforeEach((done)=>{
		fred =new User({
			email: 'fred@email.com',
			password: 'fredpassword'
		});
		fred.save()
			.then(()=>done());
	});

	it('finds all users with a name of fred', (done)=>{
		User.find({
			email: 'fred@email.com',
			password: 'fredpassword'
			}).then((user)=>{
				assert(user[0]._id.toString()=== fred._id.toString());
				done();
			});
	});

	it('find a user with a particular id', (done)=>{
		User.findOne({_id: fred._id})
			.then((user)=>{
				assert(user.email==="fred@email.com");
				done();
			});
	});
});