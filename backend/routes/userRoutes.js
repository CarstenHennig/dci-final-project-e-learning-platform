"use strict";
import { Router } from "express";
import User from "../models/UserProfile.js";
import jwt from "jsonwebtoken";
let router = Router();

router.use(function (req, res, next) {
	console.log(req.url, "@", new Date().toLocaleTimeString());
	next();
});

//===== Register A User
router
	.route("/register")
	.post(async (req, res) => {
		const user = await User.register(req.body);
		if (!user) {
			return res.status(400).json({ success: false });
		}
		res.status(201).json({ success: true, user: user });
	})


// USER LOGIN
// Login User with password and email
router
.route("/login")
.post(async (req, res) => {
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


// GET USER PROFILE
router
.route("/users/:_id")
.get( async (req, res) => {
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

export default router