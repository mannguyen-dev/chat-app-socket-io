import { Socket, Server as SocketIOServer } from "socket.io";

export const registerUserEvents = (io: SocketIOServer, socket: Socket) => {
  socket.on("testSocket", (data) => {
    socket.emit("testSocket", { msg: "it's working...!!! hahahaah" });
  });
};
