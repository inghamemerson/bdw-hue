var hueBDW = require('./hueDisco.js');
console.log(hueBDW);

var SerialPort = require("serialport").SerialPort;
console.log(SerialPort);
var serialport = new SerialPort("/dev/cu.usbserial-A601LLX0", {
    baudrate: 9600
});

serialport.on("open", function () {
  console.log('open');
  serialport.on('data', function(data) {
    console.log('data received: ' + data);

    if(data == 1) {
        console.log('startDisco()');
        hueBDW.startDisco();
    } else if(data == 0) {
        console.log('endDisco()');
        hueBDW.endDisco();
    }
  });
  serialport.write("ls\n", function(err, results) {
    console.log('err ' + err);
    console.log('results ' + results);
  });
});




// var serialport = require("serialport");
// var SerialPort = serialport.SerialPort; // localize object constructor

// var sp = new SerialPort("/dev/tty.usbserial-A601LLX0", {
//   parser: serialport.parsers.readline("\n")
// });

// SerialPort.on("data", function (data) {
//   sys.puts("here: "+data);
// });


var serial = require( "serialport" );
var SerialPort = serial.SerialPort;
 
// Replace with the device name in your machine.
var portName = "/dev/tty.usbserial-A601LLX0";
 
var sp = new SerialPort( portName, {
    baudrate:9600,
    parser  :serial.parsers.readline( "\n" )
} );
 
sp.on( "data", function ( data ) {
    console.log( data );
    socket.emit( "message", data.toString() );
} );