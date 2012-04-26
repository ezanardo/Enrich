/*
 * pulser
 */
 
var events = require('events');
var util = require('util');

//create a Pulser Obj
function Pulser(){
    events.EventEmitter.call(this);
}


util.inherits(Pulser, events.EventEmitter);

Pulser.prototype.start = function(){
    var self = this;
    this.id = setInterval(
        function(){
            util.log('>>> pulse');
            self.emit('pulse', 19, 12);
            util.log('<<< pulse');
        },
    1000
    );
}

// use the Obj

var pulser = new Pulser();
//this function look at the self.emit 'pulse'
pulser.on('pulse', function(data1, data2){
        (data1 == 10) ? util.log('Data2:' + data2) : util.log('Data1:' + data1);   
    }
);
// The fuction start is in the pulser obj declared
pulser.start();







