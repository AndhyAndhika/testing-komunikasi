// const SerialPort = require('serialport')
var stdin = process.openStdin();
const { SerialPort } = require('serialport');

// Create a port
const port = new SerialPort({
  path: "COM4",
  baudRate: 9600,
}, err => {
    if(err != null) {
        console.log(err)
        return
    }
})


port.on('error', function(err)  { 
    console.log('Error: ', err.message)
})

port.on('data', function (data) {
     console.log('', data.toString('utf8')) 
})

stdin.addListener("data", function(data) {
  console.log(data.toString().trim());
  port.write(data);
});