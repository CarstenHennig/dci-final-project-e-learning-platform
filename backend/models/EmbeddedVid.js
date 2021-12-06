import mongoose from 'mongoose';
import { hash, compare } from '../libs/hashGenerate.js';

const required = true;


const vidGallerySchema = mongoose.Schema({
	galleryName: {type:String, required},
	ownerName: {type:String, required},
	email: {type:String, required},
	videos: [{

		title: {
			type: String,
			default: 'Killing the Goose'
		},
		desc: {
			type: String,
			default: 'From the land passed hope and fear. from the land of the muses, where Medusa is a gift, let the golden river flow for eternity'
		},
		postedBy: {
			type: String,
			default: "Sally Santus"
		},
		videoUrl: {
			type: String,
			default: 'https://youtu.be/nTeuhbP7wdE'

		},
		createdAt: {
			type: Date,
			default: new Date().toString()
		}
	}],

	createdAt: {
		type: Date,
		default: new Date()
	}
}, { timestamps: true });



// 1) Create a video gallery

vidGallerySchema.statics.register = async (galleryData) => {
	try {
		/* galleryData.email = await compare(userData.password); */
		return await Gallery.create(galleryData)
	} catch (error) {
		if (error.message.indexOf('email') !== -1) {
			console.error("Error registering user (email)");
		} else { console.error(error.message); }
		return null;
	}
}

///  2) LOGIN controller: Connects automatically to user's gallery on user login

vidGallerySchema.statics.login = async (galleryData) => {

	const gallery = await Gallery.findOne({ email: galleryData.email });

	if (!gallery) {
		return null;
	}
	const success = galleryData.email= gallery.email

	if (!success) {

		return "No gallery!";
	}

	return gallery.toJSON();
};

// THIS RETURNS USER VALUES AFTER LOGIN from frontend

vidGallerySchema.methods.toJSON = function () {
	const gallery = this.toObject()

	return gallery
}
const Gallery = mongoose.model('embeddedVideos', vidGallerySchema);

export default Gallery;



