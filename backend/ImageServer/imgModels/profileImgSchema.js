import mongoose from 'mongoose';


const imageSchema = mongoose.Schema({
	email: {
		type: 'string',
		default: 'Octave@gakanou.com'
	},
	myImage: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now()
	}
})

// CREATE Model from imageSchema
const ProfileImg = mongoose.model('ProfileImg', imageSchema);

export default ProfileImg;

