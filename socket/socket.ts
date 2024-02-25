import {io} from "socket.io-client";
const BackendURL = process.env.NODE_ENV === "production" ? "https://canvas-app-backend.onrender.com":"http://localhost:5001"
export const socket = io(BackendURL);
