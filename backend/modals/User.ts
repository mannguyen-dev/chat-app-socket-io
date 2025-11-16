import { Schema, model } from "mongoose";
import { UserProps } from "../types";

const UserSchema = new Schema<UserProps>({
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: "",
  },
  created: {
    type: String,
    default: Date.now,
  },
});

export default model<UserProps>("User", UserSchema);
