const assert= require('assert');
const User=require('../models/user');

describe('Creating records', ()=>{
	it('saves a user', (done)=>{
		const fred= new User({
			email: "fred@newmail.com",
			password: "fredpassword"
		});
		fred.save()
			.then(()=>{
				assert(!fred.isNew);
				done();
			});
	});
});