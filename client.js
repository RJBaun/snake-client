const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // sending info upon connect
  conn.on("connect", function() {
    console.log(`Successfully connected to server`);
    conn.write(`Name: RJB`);
    // setInterval(() => {
    //   conn.write(`Move: up`);
    // }, 50)
    // conn.write(`Move: up`)
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
};

module.exports = connect;