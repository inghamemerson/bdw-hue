var hueBDW = require('./hueDisco.js');

var SerialPort = require("serialport").SerialPort;
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