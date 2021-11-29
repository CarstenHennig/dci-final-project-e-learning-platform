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

router
	.route ("/bulk")
    .post(upload.array("file", 10), (req, res) => {
	const files = req.files //  "files" are coming from client side
  console.log(files)
  return res.send(files)
})







export default router;