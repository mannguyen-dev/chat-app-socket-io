import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    consersationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Conversation",
      require: true,
    },
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    content: String,
    attachment: String,
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
