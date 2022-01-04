import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import { connect } from './libs/database.js';
import users from "./routes/userRoutes.js"
import editUsers from "./routes/editUsers.js"
import posts from "./routes/2_postRoutes.js"
import comments from "./routes/commentsRoute.js"
import uploads from "./routes/uploadsRoutes.js"
import galleries from "./routes/vidGalleryRoute.js"
import multer, { diskStorage } from 'multer';
import User from "./models/UserProfile.js";
//connect NodeJS to database
dotenv.config();
await connect()

//============
const app = express();
app.use(express.json());
app.use(cors())
app.use(express.static('User'));
app.use(express.urlencoded({ extended: true }));
//=============== 

// USER ROUTER HANDLES ALL USER RELATED REQUESTS
app.use("/users", users);
app.use("/editUsers", editUsers);
app.use("/galleries", galleries)
//POSTS ROUTER HANDLES ALL POSTS RELATED REQUESTS
app.use("/posts", posts);
app.use("/comments", comments);
//===========

 app.use("/uploads" , uploads)
app.use(express.static('images'))


// Final error check middleware
app.use((req, res) => {
	res.status(404);
	res.json({ error: "Resource not found 😥" });
});
//===================



app.listen(process.env.PORT, () => {
	console.log("Listening on http://localhost:" + process.env.PORT);
});