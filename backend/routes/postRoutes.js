"use strict";
import { Router } from "express";
import User from "../models/UserProfile.js";
import Post from "../models/Post.js";
let router = Router();

router.use(function (req, res, next) {
	console.log("Request made to ", req.url, "@", new Date().toLocaleTimeString());
	next();
});

// /* Create POSTS by one user */
router
	.route("/writePost")
	.put(async (req, res, next) => {
		const posts = [];
		let authorId;
		const getAuthorId = await User.findOne({ email: req.body.email })
		if (getAuthorId) {
			authorId = getAuthorId._id;
			console.log("USER ID HERE: ", getAuthorId._id)
		}
		const postData = {
			title: req.body.title,
			summary: req.body.summary,
			content: req.body.content,
			author: req.body.author,
			authorId: authorId,
			imageURL: req.body.imageURL,
			category: req.body.category,
			comments: [],
		}
		console.log(postData)
		// CREATE NEW POSTS
		const post = await new Post(postData);
		await post.save();
		posts.push(post);
		if (!post) {
			return res.status(400).json({ success: false });
		}
		res.status(201).json({ success: true, post: post });


	});

//===== Get messages of all users
router
	.route("/allPosts")
	.get(async (req, res, next) => {
		const userPosts = await Post.find({})
		console.log("WE ARE USERS POSTS : ", userPosts)
		let posts = []

		for (let index = 0; index < userPosts.length; index++) {
			const element = userPosts[index];
			
			posts = posts.concat(element)
		}
		return res.send(posts)
		next()
	});

//===== Get all messages by one user using _id
router
	.route("/userPosts/:authorId")
	.get(async (req, res, next) => {
		try {
			const result = await Post.find({ authorId: req.params.authorId });
			res.send(result);
		} catch (err) {
			console.log(err);
			res.status(500).send("Something went wrong, check logs");
		}



	});





export default router;