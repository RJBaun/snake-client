const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // sending info upon connect 
  conn.on("connect", function() {
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