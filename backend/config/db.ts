import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
  } catch (err) {
    console.log("mongoDB connect error", err);
    throw err;
  }
};

export default connectDB;
