"use strict";
import { Router } from "express";
import Post from "../models/Post.js"
import moment from "moment";
let router = Router();

router.use(function (req, res, next) {
	console.log("PINGED ", req.url, "@", moment(new Date()).format(' DD - MMMM - YYYY'));

	next();
});

// /* Create clips by one user */
router
	.route("/writeComment")
	.put(async (req, res, next) => {
		const storeComment = await Post.findOne({_id: req.body.postId})	

		  if (storeComment) {
			const commentData = { comment: req.body.comment, commenter: req.body.commenter, postId: req.body.postId}
			const output = storeComment.comments.push(commentData)
			const doc = await storeComment.save()
			console.log("OUTPUT: ", commentData)
			return res.status(201).json(commentData)

		}	

		res.json({ error: "User cannot be updated" })
	});

export default router