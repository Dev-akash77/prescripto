import express from "express";
import cors from "cors";
import "dotenv/config";
import { databaseConnect } from "./config/db_connection.js";
import { authRouter } from "./routes/user.routes.js";

const app = express();
const port = process.env.PORT || 3000;

// ! express default middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ! mongo db connection
databaseConnect();

// ! User routes
app.use(authRouter)

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
