const {connect} = require('./client')
const net = require("net");
const setupInput = require('./input')
  
  
  // const stdin = process.stdout
  // stdout.write('Connection disabled')


  
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
      let conn = connect();
      setupInput(conn)

