const assert = require('assert');
const User = require('../models/user');

describe('Updating records', ()=>{
	let fred;
	beforeEach((done)=>{
		fred= new User({
			email: 'fred@email.com',
			password: 'fredpassword'
		});
		fred.save()
			.then(()=>done());	
	});

	function assertName(operation, done){
		operation
		.then(()=>User.find({}))
			.then((users)=>{
				assert(users.length===1);
				assert(users[0].password==='newpassword');
				done();
			});
	}
	//a model instance update			
	it('instance type set and save', (done)=>{
		fred.set('password', 'newpassword');
		assertName(fred.save(), done);
	});

	it('A model instance can update', (done)=>{
		assertName(fred.update({password: 'newpassword'}), done);
	});

	//class based update
	it('A model class update', (done)=>{
		assertName(
			User.update({password:'fredpassword'}, {password: 'newpassword'}), done
		);
	});

	it('A model class update one record', (done)=>{
		assertName(
			User.findOneAndUpdate({email:'fred@email.com'}, {email: 'fred@newemail.com'}), done
		);
	});

	it ('A model class fins a record with an ID and update', (done))=>{
		assertName(
			User.findByIdAndUpdate(fred._id, {password: newpassword}), done)
		);
	});
})