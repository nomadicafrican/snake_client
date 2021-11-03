
let connection;

const setupInput = function (conn) {
  const stdin = process.stdin;
  connection = conn
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = (key)=>{
  if (key === '\u0003') {
    console.log('CONNECTION TERMINATED')
    process.exit();
  } else if (key === 'w'){
    console.log('Move: up')
    connection.write('Move: up')
  }else if (key === 's'){
    console.log('Move: down')
    connection.write('Move: down')
  } else if (key === 'd'){
    console.log('Move: right')
    connection.write('Move: right')
  } else if (key === 'a'){
    console.log('Move: left')
    connection.write('Move: left')
  }

}

module.exports =  setupInput