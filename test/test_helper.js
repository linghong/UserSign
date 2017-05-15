const mongoose =require('mongoose');
mongoose.Promise = global.Promise;//ES6 promise

before((done)=>{
	mongoose.connect('mongodb://localhost/users_test');
	mongoose.connection
	  .once('open', ()=>{done();})
	  .on('error', (error)=>{
	  	console.warn('Warning', error);
	  });
});


beforeEach((done) =>{
	mongoose.connection.collections.users.drop(()=>{
		//ready to run each test
		done();
	});
});