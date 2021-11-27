import express from 'express';
import mongoose from 'mongoose';
import multer, { diskStorage } from 'multer';
import cors from 'cors';
import ProfileImg from "./imgModels/profileImgSchema.js"
import { connect } from '../libs/database.js';

const app = express()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
await connect()
// STORE IMAGES LOCALLY: 
const storageEngine = diskStorage({
	destination: (req, file, cb) => {
		cb(null, './images')
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + '_' + file.originalname)
	}
});
const upload = multer({ storage: storageEngine })



// IMAGE POST ENDPOINT

// For Single image upload
app.post('/single', upload.single("myImage"), async (req, res, next) => {
	const data = req.file
	console.log(data)

	try {
		const newPic = await ProfileImg.create(body);
		newPic.save();
		res.status(201).json({ message: "Image uploaded successfully!",createdPic: newPic });
	} catch (error) {
		res.status(409).json({
			message: error.message,
		});

	}



})
app.use(express.static('ProfileImg'))

// =================




app.listen(process.env.PORT, () => {
	console.log("Listening on http://localhost:" + process.env.PORT);
});

//app.listen(8088, console.log("listening on http://localhost:8088"));