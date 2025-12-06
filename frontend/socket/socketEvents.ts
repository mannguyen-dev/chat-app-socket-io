import { getSocket } from "./socket";

export const testSocket = (payload: any, off: boolean = false) => {
  const socket = getSocket();

  if (!socket) {
    console.log("Socket is not connected");
    return;
  }

  if (off) {
    // turn off listening to this events
    socket.off("testSocket", payload);
  } else if (typeof payload == "function") {
    socket.on("testSocket", payload);
  } else {
    socket.emit("testSocket", payload);
  }
};

export const updateProfile = (payload: any, off: boolean = false) => {
  const socket = getSocket();

  if (!socket) {
    console.log("Socket is not connected");
    return;
  }

  if (off) {
    // turn off listening to this events
    socket.off("updateProfile", payload);
  } else if (typeof payload == "function") {
    socket.on("updateProfile", payload);
  } else {
    socket.emit("updateProfile", payload);
  }
};

export const getContacts = (payload: any, off: boolean = false) => {
  const socket = getSocket();

  if (!socket) {
    console.log("Socket is not connected");
    return;
  }

  if (off) {
    // turn off listening to this events
    socket.off("getContacts", payload);
  } else if (typeof payload == "function") {
    socket.on("getContacts", payload);
  } else {
    socket.emit("getContacts", payload);
  }
};

export const newConversation = (payload: any, off: boolean = false) => {
  const socket = getSocket();

  if (!socket) {
    console.log("Socket is not connected");
    return;
  }

  if (off) {
    // turn off listening to this events
    socket.off("newConversation", payload);
  } else if (typeof payload == "function") {
    socket.on("newConversation", payload);
  } else {
    socket.emit("newConversation", payload);
  }
};
