import { Platform } from "react-native";

export const CLOUDINARY_CLOUD_NAME = "dp0k9lpm9";
export const CLOUDINARY_UPLOAD_PRESET = "images";

export const API_URL =
  Platform.OS == "android"
    ? "http://192.168.1.5:3000"
    : "http://localhost:3000";
