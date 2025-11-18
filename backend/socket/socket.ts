import dotenv from "dotenv";
import { Socket, Server as SocketIOServer } from "socket.io";
import jwt from "jsonwebtoken";
import { registerUserEvents } from "./userEvents";

dotenv.config();

export const initializeSocket = (server: any): SocketIOServer => {
  const io = new SocketIOServer(server, {
    cors: {
      origin: "*", //alows all origin
    },
  });

  // auth middleware
  io.use((socket: Socket, next) => {
    const token = socket.handshake.auth.token;

    if (!token) {
      return next(new Error("Authentication Error: no token provided"));
    }

    jwt.verify(
      token,
      process.env.JWT_SECRET as string,
      (err: any, decoded: any) => {
        if (err || !decoded) {
          return next(new Error("Authentication Error: invalid token"));
        }

        // attach user data to socket
        const userData = decoded.user;
        socket.data = userData;
        socket.data.userId = userData.id;

        next();
      }
    );
  });

  // when socket connects, register events
  io.on("connection", async (socket: Socket) => {
    const userId = socket.data.userId;
    console.log(`User connected: ${userId}, usernam ${socket.data.name}`);

    // register events for this socket
    registerUserEvents(io, socket);

    // disconnect
    socket.on("disconnect", () => {
      console.log(`User disconnected: ${userId}`);
    });
  });

  return io;
};
