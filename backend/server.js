import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { connect } from './libs/database.js';
import User from "./models/UserProfile.js";
import { messageRules } from "./validation/messageValidation.js";

//connect NodeJS to database
dotenv.config();
await connect()

//============

const app = express();
app.use(express.json());
app.use(cors())
//=============== 

// Test server connection
/* app.use("/", (req,res)=>{
	res.send("Welcome")
	console.log("Backend here!")
}) */
//============

// Register New User ==

app.post("/register", async (req, res) => {
	const user = await User.register(req.body);

	if (!user) {
		return res.status(400).json({ success: false });
	}

	res.status(201).json({ success: true });
});

// Login User with password and email
app.post("/login", async (req, res) => {
	const user = await User.login(req.body);

	if (!user) {
		return res.status(400).json({ user });

	}

	// create JWT token
	const token = jwt.sign({ _id: user._id }, process.env.SECRET);
	res.json({ user, token })
})

// JWT validation middleware
const checkLogin = (req, res, next) => {
	const rawJWTHeader = req.headers.authorization;

	if (!rawJWTHeader) {
		return res.sendStatus(401);
	}
	const token = rawJWTHeader.slice(7)
	jwt.verify(token, process.env.SECRET, function (err, decoded) {
		if (err) {
			console.log("Cannot verify JWT", err.message);
			return res.sendStatus(401);

		}
		next()
	})
};

//REQUEST HAndling Middlewares

const validate = (rules) => {
	const middlewares = rules;
	middlewares.push((req, res, next) => {
		const errors = validationResult(req);
		if (errors.isEmpty()) {
			return (next())

		}
		res.status(400).json({
			errors: errors.array()
		})

	})
	return middlewares;

}

// This endpoint takes in a message and saves it; returning a list of messages
const messages = ["First!"];
app.post("/message", checkLogin, validate(messageRules), (req, res) => {
	messages.push(req.body.message);
	res.send(messages);
});

// If the previous middlewares did not handle the request, this will!
app.use((req, res) => {
	res.status(404);
	res.json({ error: "Resource not found 😥" });
});


app.listen(process.env.PORT, () => {
	console.log("Listening on http://localhost:" + process.env.PORT);
});