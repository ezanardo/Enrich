var doubled = require('../lib/double');
//var events = require('events');

exports['calculate'] = function(test){
    test.equal(doubled.calculate(2), 4);
    test.equal(doubled.calculate(5), 10);
    	test.throws(function () { doubled.calculate(); });
    	test.throws(function () { doubled.calculate(null); });
    	test.throws(function () { doubled.calculate(true); });
    	test.throws(function () { doubled.calculate([]); });
    	test.throws(function () { doubled.calculate({}); });
    	test.throws(function () { doubled.calculate('asdf'); });
    	test.throws(function () { doubled.calculate('123'); });
	test.done();
};
