// var hueBDW = require('./hueDisco');

var SerialPort = require("serialport");
console.log(SerialPort);
// var serialport = new SerialPort("/dev/tty.usbserial-A601LLX0");

// serialport.on("open", function () {
//   console.log('open');
//   serialport.on('data', function(data) {
//     console.log('data received: ' + data);

//     if(data === true) {
//         startDisco();
//     } else if(data === false) {
//         endDisco();
//     }
//   });
//   serialport.write("ls\n", function(err, results) {
//     console.log('err ' + err);
//     console.log('results ' + results);
//   });
// });

SerialPort.list(function (err, ports) {
  ports.forEach(function(port) {
    console.log(port.comName);
    console.log(port.pnpId);
    console.log(port.manufacturer);
  });
});