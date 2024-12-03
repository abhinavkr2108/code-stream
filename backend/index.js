import express from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const userSocketMap = {};

const PORT = process.env.PORT || 5000;

function getAllConnectedClients(roomId) {
  return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map(
    (socketId) => {
      return {
        socketId: socketId,
        username: userSocketMap[socketId],
      };
    }
  );
}

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);
  socket.on("join", ({ roomId, username }) => {
    userSocketMap[socket.id] = username;
    socket.join(roomId);

    console.log("USER MAP");
    console.log(userSocketMap);

    const clients = getAllConnectedClients(roomId);
    // Output clients
    /**
     * clients [
        { socketId: 'javEi9T5L5SAQEKdAAAB', username: 'Abhinav' },
        { socketId: 'dvnu7CXPtwJoCo_GAAAD', username: 'second' }
      ]

     */

    clients.forEach(({ socketId }) => {
      io.to(socketId).emit("joined", {
        clients,
        username,
        socketId: socket.id,
      });
    });
  });
});

server.listen(PORT, () => {
  console.log(`listening on port:${PORT}`);
});
