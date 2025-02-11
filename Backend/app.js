import express from "express";
import cors from "cors";
import "dotenv/config";
import { databaseConnect } from "./config/db_connection.js";
import { authRouter } from "./routes/user.routes.js";
import { adminRouter } from "./routes/admin.routes.js";
import { doctorRouter } from "./routes/doctor.routes.js";

const app = express();
const port = process.env.PORT || 3000;

// ! express default middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ! mongo db connection
databaseConnect();

// ! User routes
app.use(authRouter);
// ! admin routes 
app.use(adminRouter);
// ! doctor routes 
app.use(doctorRouter);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
