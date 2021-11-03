const {connect} = require('./client')
const net = require("net");
const handleUserInput = (key)=>{
  if (key === '\u0003') {
    console.log('Hi')
    process.exit();
  }

}
  
  
  // const stdin = process.stdout
  // stdout.write('Connection disabled')

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
setupInput()

// establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: '165.227.47.243',
//     port: 50541
//   });

//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   return conn;
// };

console.log("Connecting ...");
connect();

