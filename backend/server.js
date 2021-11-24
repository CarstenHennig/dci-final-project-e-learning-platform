import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { connect } from './libs/database.js';
import Mess from './models/StoreMessages.js'
import User from "./models/UserProfile.js";
import { messageRules } from "./validation/messageValidation.js";

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

// Test server connection
/*  app.use("/", (req,res)=>{
	res.send("Welcome")
	console.log("Backend here!")
})  */
//============

// Register New User ==

app.post("/register", async (req, res) => {
	const user = await User.register(req.body);

	if (!user) {
		return res.status(400).json({ success: false });
	}

	res.status(201).json({ success: true, user: user });

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
	console.log(user);
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

// Blog Post endpoint

/* Create messages by one user */
app.put('/blogPosts', async (req, res, next) => {
	const data = req.body
	console.log(req.body)
	console.log(data.title);
	const storePost = await User.findOne({ email: req.body.email })

	if (storePost) {
		storePost.blogPosts.push({ title: req.body.title, content: req.body.content })
		await storePost.save()
		return res.status(201).json({ content: storePost.blogPosts })

	}
	console.log("I store your posts " + storePost);
	res.json({ error: "User cannot be updated" })
});


// GET USER PROFILE

app.get("/users/:_id", async (req, res) => {

	try {
		let user = await User.findById(req.params._id);
		console.log('USER_PROFILE: ', user)
		const data = user
		res.status(200)
		return res.send(data);
	} catch (err) {

		res.status(500).json({
			Message: err.message

		})

	}
})

//==========================


// Final error check middleware
app.use((req, res) => {
	res.status(404);
	res.json({ error: "Resource not found 😥" });
});


app.listen(process.env.PORT, () => {
	console.log("Listening on http://localhost:" + process.env.PORT);
});