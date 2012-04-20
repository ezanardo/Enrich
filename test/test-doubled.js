var doubled = require('../lib/double');
//var events = require('events');

exports['calculate'] = function(test){
	test.equal(doubled.calculate(2), 4);
	test.done();
};
