"use strict";
import { Router } from "express";
import User from "../models/UserProfile.js";
let router = Router();

router
	.route("/email/:_id")
	.put(async (req, res, next) => {
		const user = await User.findOneAndUpdate({ _id: req.params._id },
			{ email: req.body.email }, { new: true })
		if (user) {
			return res.status(201).json(user)
		}
		res.status(400).json({ message: "Failed to update!" })


	});
router
	.route("/firstName/:_id")
	.put(async (req, res, next) => {
		const user = await User.findOneAndUpdate({ _id: req.params._id },
			{ firstName: req.body.firstName }, { new: true })
		if (user) {
			return res.status(201).json(user)
		}
		res.status(400).json({ message: "Failed to update!" })


	});
router
	.route("/describeSelf/:_id")
	.put(async (req, res, next) => {
		const user = await User.findOneAndUpdate({ _id: req.params._id },
			{ describeSelf: req.body.describeSelf }, { new: true })
		if (user) {
			return res.status(201).json(user)
		}
		res.status(400).json({ message: "Failed to update!" })


	});
router
	.route("/password/:_id")
	.put(async (req, res, next) => {
		const user = await User.findOneAndUpdate({ _id: req.params._id },
			{ password: req.body.password }, { new: true })
		if (user) {
			return res.status(201).json(user)
		}
		res.status(400).json({ message: "Failed to update!" })


	});

router
	.route("/phoneNumber/:_id")
	.put(async (req, res, next) => {
		const user = await User.findOneAndUpdate({ _id: req.params._id },
			{ phoneNumber: req.body.phoneNumber }, { new: true })
		if (user) {
			return res.status(201).json(user)
		}
		res.status(400).json({ message: "Failed to update!" })


	});
router
	.route("/avatar/:_id")
	.put(async (req, res, next) => {
		const user = await User.findOneAndUpdate({ _id: req.params._id },
			{ avatar: req.body.avatar }, { new: true })
		if (user) {
			return res.status(201).json(user)
		}
		res.status(400).json({ message: "Failed to update!" })


	});
router
	.route("/address/:_id")
	.put(async (req, res, next) => {
		const user = await User.findOneAndUpdate({ _id: req.params._id },
			{
				address: {
					city: req.body.city,
					street: req.body.street,
					zip: req.body.zip,
					country: req.body.country
				}
			}, { new: true })
		if (user) {
			return res.status(201).json(user)
		}
		res.status(400).json({ message: "Failed to update!" })


	});
export default router


