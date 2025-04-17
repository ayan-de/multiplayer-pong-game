const server = require("node:http").createServer();
const io = require("socket.io")(server);
const PORT = 6000;

io.on("connection", (socket) => {
  console.log("A user connected");
});

server.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
