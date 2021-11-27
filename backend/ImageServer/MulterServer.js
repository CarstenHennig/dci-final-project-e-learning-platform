import express from 'express';
import multer, { diskStorage } from 'multer';
import dotenv from "dotenv"
import cors from 'cors';
import {connect} from '../libs/database.js'
import path from 'path';
import mongoose from 'mongoose';
import model from 'mongoose'
import models from "mongoose"
import ProfileImage from './imgModels/profileImgSchema.js'

// CONNECT multerServer to database
dotenv.config();
//await connect()


const imageApp = express()
imageApp.use(cors())
imageApp.use(express.urlencoded({ extended: true }));
// =================

// 1) TEST SERVER 
imageApp.get('/', (req, res) => {
	res.send("YouLearn server greets you!")
})
// 2) Set up images storage server
const __dirname = path.resolve();
imageApp.use('/images', express.static(__dirname + '/images')); //Gives server access to images directory


const storageEngine = diskStorage({
	destination: (req, file, cb) => {
		cb(null, './images')
	},
	filename: (req, file, cb) => {
		cb(null, new Date().toISOString() + '_' + file.originalname)
	}
});
const upload = multer({ storage: storageEngine })

// 3) SINGLE FILE API

 imageApp.post('/single', upload.single('image'), async (req, res, next) => {
	const file = req.file
	console.log(file)
	/* if (!file) {
		const error = new Error("I can't detect a file")      
		error.httpStatusCode = 400
		return next("Please verify your input fields")
	}
	const imagePost = model({
		image: file.path
	})

	const storedImage = await imagePost.save()
	res.json(storedImage) */
})

// 3) IMAGE RETRIEVAL API 
imageApp.get('/image', async (req, res) => {
	const image = await model.find()
	res.json(image)
}) 

//==============
/* imageApp.post('/single', upload.single("image"), (req, res) => {
	const file = req.file
	const description = req.body.description
	console.log(file)
	res.send(file)



}) */
imageApp.use(express.static('ProfileImage')) // This permits client side access to uploaded mages






imageApp.listen(8055, console.log("listening on http://localhost:8055"));