import { Socket, Server as SocketIOServer } from "socket.io";
import User from "../modals/User";
import { generateToken } from "../utils/token";

export const registerUserEvents = (io: SocketIOServer, socket: Socket) => {
  socket.on("testSocket", (data) => {
    socket.emit("testSocket", { msg: "it's working...!!! hahahaah" });
  });

  socket.on(
    "updateProfile",
    async (data: { name?: string; avatar?: string }) => {
      console.log("updateprofile event: ", data);

      const userId = socket.data.userId;
      if (!userId) {
        return socket.emit("updateProfile", {
          success: false,
          msg: "Unauthorized",
        });
      }

      try {
        const updatedUser = await User.findByIdAndUpdate(
          userId,
          {
            name: data.name,
            avatar: data.avatar,
          },
          { new: true } // return updated user
        );

        if (!updatedUser) {
          return socket.emit("updateProfile", {
            success: false,
            msg: "User not found",
          });
        }

        // gen token with updated value
        const newToken = generateToken(updatedUser);
        socket.emit("updateProfile", {
          success: true,
          data: { token: newToken },
          msg: "Profile updated successfully",
        });
      } catch (err) {
        console.log("Error update profile: ", err);
        socket.emit("updateProfile", {
          success: false,
          msg: "Error updating profile",
        });
      }
    }
  );
};
