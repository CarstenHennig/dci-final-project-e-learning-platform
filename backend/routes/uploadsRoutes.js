"use strict";
import express, { Router } from "express";
import {upload} from "../models/multerModel.js"
let router = Router();


router
	.route("/single")
    .post(upload.single("image"), (req, res) => {
	const file = req.file
	const body = req.body
	const description = req.body.description
	console.log(file)
	res.send(file)
})









export default router;