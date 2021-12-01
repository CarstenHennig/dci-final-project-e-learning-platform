"use strict";
import { Router } from "express";
import Gallery from "../models/EmbeddedVid.js"
import jwt from "jsonwebtoken";
let router = Router();

router.use(function (req, res, next) {
	console.log("PINGED ", req.url, "@", new Date().toLocaleTimeString());
	next();
});

//===== Register A User
router
	.route("/register")
	.post(async (req, res) => {
		const gallery = await Gallery.register(req.body);
		console.log(req.body)
		if (!gallery) {
			return res.status(400).json({ success: false });
		}
		res.status(201).json({ success: true, gallery: gallery });
	})
router
	.route("/login")
	.post(async (req, res) => {
		const gallery = await Gallery.login(req.body);

		if (!gallery) {
			return res.status(400).json({ gallery });
		}
		// create JWT token
		const token = jwt.sign({ _id: gallery._id }, process.env.SECRET);

		res.json({ gallery, token })
		console.log(gallery);


	})

//==== 
// /* Create clips by one user */
router
	.route("/createClip")
	.put(async (req, res, next) => {

		const storeVideo = await Gallery.findOne({ email: req.body.email })
		console.log(req.body)
		if (storeVideo) {
			const video = {
				title: req.body.title, desc: req.body.desc,
				videoUrl: req.body.videoUrl, postedBy: req.body.postedBy
			}
			console.log(video)
			const output = storeVideo.videos.push(video)
			await storeVideo.save()
			console.log(output)
			return res.status(201).json(video)

		}

		res.json({ error: "Gallery cannot be updated" })
	});

//===== Get messages of all users
router
	.route("/getClips")
	.get(async (req, res, next) => {
		const videos = await Gallery.find({})
	
		let clips = []

		for (let index = 0; index < videos.length; index++) {
			const element = videos[index];
			console.log(element)
			//console.log("CLIPS HERE: ", element.clips[0].author, element.clips)
			clips = videos.concat(element.videos)
		}
		return res.send(clips)
		next()
	});


export default router