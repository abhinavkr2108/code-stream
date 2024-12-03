import { io } from "socket.io-client";

export const initSocket = async () => {
  return io("http://localhost:5000", {
    reconnectionAttempts: 10,
    timeout: 10000,
    transports: ["websocket"],
    forceNew: true,
  });
};
