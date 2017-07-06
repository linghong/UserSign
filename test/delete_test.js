const assert = require('assert');
const User = require('../models/user');

describe('Deleting a user', ()=>{
	let fred;;

	beforeEach((done)=>{
		fred = new User({ email: 'fred@email.com',
						password: 'fredpassword'});
		fred.save().then(()=> done());
	});

	it('model instance remove', (done)=>{
		fred.remove()
			.then(()=>{
				User.findOne({ 
						email: 'fred@email.com',
						password: 'fredpassword'
					}).then((user)=>{
						assert(user===null);
						done();
					});
			});
	});

	it('class method remove', (done)=>{
		//remove a bunch of users with that name
		User.remove({
				email: 'fred@email.com',
				password: 'fredpassword'
			}).then(()=>User.findOne({
				email: 'fred@email.com',
				password: 'fredpassword'
			})).then((user)=>{
				assert(user===null);
				done();
			});
	});

	it('class method findAndRemove', (done)=>{
		User.findOneAndRemove({email: 'fred@email.com'})
		.then(()=>User.findOne({email: 'fred@email.com'}))
		.then((user)=>{
				assert(user === null);
				done();
		});
	});

	it('class method findByIdAndRemove', (done)=>{
		User.findByIdAndRemove(fred._id)
		.then(()=>User.findOne({email: 'fred@email.com'}))
		.then((user)=>{
			assert(user === null);
			done();
		});
	});

});