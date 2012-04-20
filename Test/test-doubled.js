var doubled = require(../lib/doubled);

exports['calculate'] = function(test){
	test.equal(doubled.calculate(2), 4);
	test.done();
};
