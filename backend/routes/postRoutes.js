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
		
		const storePost = await User.findOne({ email: req.body.email })
		if (storePost) {
			const post = { title: req.body.title, summary: req.body.summary, content: req.body.content, author: req.body.author, imageURL: req.body.imageURL, category: req.body.category}
			const output = storePost.posts.push(post)
			await storePost.save()
			console.log("OUTPUT: ", post)
			return res.status(201).json(post)

		}

		res.json({ error: "User cannot be updated" })
	});

//===== Get messages of all users
router
	.route("/getPost")
	.get(async (req, res, next) => {
		const userPosts = await User.find({})
		let posts = []

		for (let index = 0; index < userPosts.length; index++) {
			const element = userPosts[index];
			// console.log("ELEMENT HERE: ", element.posts[0].author, element.posts)
			posts = posts.concat(element.posts)
		}
		return res.send(posts)
		next()
	});





export default router;