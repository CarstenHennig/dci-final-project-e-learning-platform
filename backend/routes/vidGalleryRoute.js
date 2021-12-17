"use strict";
import { Router } from "express";
import User from "../models/UserProfile.js"
import moment from "moment";
let router = Router();

router.use(function (req, res, next) {
	console.log("PINGED ", req.url, "@", moment(new Date()).format(' DD - MMMM - YYYY'));
	next();
});

// /* Create clips by one user */
router
	.route("/createClip")
	.put(async (req, res, next) => {
		
		const storeVideo = await User.findOne({ email: req.body.email })
		const videoClips = storeVideo
		if (videoClips) {
			const video = {
				title: req.body.title, desc: req.body.desc, category: req.body.category,
				videoUrl: req.body.videoUrl, postedBy: req.body.postedBy
			}
			console.log(video)
			const output = storeVideo.videos.push(video)
			await storeVideo.save()
			console.log(output)
			return res.status(201).json(video)

		}

		res.json({ error: "Error: Videos cannot be updated! Check inputs!" })
	});

//===== Retrieve ll users videos
router
	.route("/getClips")
	.get(async (req, res, next) => {
		const userVideos = await User.find({})
		let videos = []

		for (let index = 0; index < userVideos.length; index++) {
			const element = userVideos[index];
			videos = videos.concat(element.videos)
		}
		return res.send(videos)
		next()
	});
export default router