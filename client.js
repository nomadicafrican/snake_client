const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function () {
  const conn = net.createConnection({
    IP,
    PORT

  });
  conn.setEncoding("utf8");
  conn.on('connect', () => {
    console.log('connected')
    conn.write("Name: AMA")
    conn.write("say: goofygoober")


  })
  return conn;
}

exports.connect = connect;
  //module.exports = {connect