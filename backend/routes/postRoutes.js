"use strict";
import { Router } from "express";
import User from "../models/UserProfile.js";
let router = Router();

router.use(function (req, res, next) {
	console.log("Request made to ", req.url, "@", new Date().toLocaleTimeString());
	next();
});

// /* Create POSTS by one user */
router
	.route("/writePost")
	.put(async (req, res, next) => {
		const data = req.body
		console.log("FRONTEND DATA: ", req.body)
		console.log("POST TITLE", data.title);
		const storePost = await User.findOne({ email: req.body.email })

		if (storePost) {
			storePost.posts.push({ title: req.body.title, content: req.body.content, author: req.body.author })
			await storePost.save()
			return res.status(201).json({ content: storePost.posts })

		}
		console.log("I store your posts: ", storePost);
		res.json({ error: "User cannot be updated" })
	});

//===== Get messages of all users
router
	.route("/getPost")
	.get(async (req, res, next) => {
		const userPosts = await User.find({})

		for (let index = 0; index < userPosts.length; index++) {
			const element = userPosts[index];
			console.log("ELEMENT HERE: ", element.posts[0].author, element.posts)
			return res.send(element.posts)
		}
		next()
	});





export default router;