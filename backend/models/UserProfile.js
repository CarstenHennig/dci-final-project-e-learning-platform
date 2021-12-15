import mongoose from 'mongoose';
import { hash, compare } from '../libs/hashGenerate.js';

const required = true;


const userSchema = mongoose.Schema({

	firstName: {
		type: String, required,
		minLength: 3
	},
	lastName: {
		type: String, required,
		minLength: 3
	},
	email: {
		type: String, required,

	},
	describeSelf: {
		type: String,
		default: "A country boy from the barkih"

	},
	password: {
		type: String, required,
		minLength: 8,



	},
	avatar: {
		type: String,
		default: 'http://placekitten.com/g/150/150'
	},

	dateOfBirth: Number,
<<<<<<< HEAD
	
	city: {
		type: String, required
	},
	street: {
		type: String, required
	},
	zip: {
		type: Number, required
	},
	country: {
		type: String, required
	},
=======

	city: String,
	street: String,
	zip: Number,
	country: String,
>>>>>>> 22c99462a706671dc986ed1c76d6aca19680478d

	phoneNumber: Number,
	followers: {
		type: Number,
		default: 0,
	},
	followed: {
		type: Number,
		default: 0,
	},
	posts: [{

		title: {
			type: String,
			default: 'Killing the Goose'
		},
		content: {
			type: String,
			default: 'From the land passed hope and fear. from the land of the muses, where Medusa is a gift, let the golden river flow for eternity'
		},
		author: {
			type: String,
			default: "Sally Santus"
		},
		image: {
			type: String,
			default: 'http://placekitten.com/g/450/350'

		},
		createdAt: {
			type: Date,
			default: new Date().toString()
		}
	}],
	postsCount: {
		type: Number,
		default: 0,
	},
	videoTitles: String,
	videoCount: Number,
	videoCount: {
		type: Number,
		default: 0,
	},
	createdAt: {
		type: Date,
		default: new Date()
	}
}, { timestamps: true });


// 1) USER Registration controller

userSchema.statics.register = async (userData) => {
	try {
		userData.password = await hash(userData.password);
		return await User.create(userData)
	} catch (error) {
		if (error.message.indexOf('email') !== -1) {
			console.error("Error registering user (email)");
		} else { console.error(error.message); }
		return null;
	}
}

///  2) LOGIN controller
userSchema.statics.login = async (userData) => {

	const user = await User.findOne({ email: userData.email });

	if (!user) {
		return null;
	}
	const success = await compare(userData.password, user.password);

	if (!success) {

		return "This user does not exist. Check credentials";
	}

	return user.toJSON();
};

// THIS RETURNS USER VALUES AFTER LOGIN from frontend

userSchema.methods.toJSON = function () {
	const user = this.toObject()
	delete user.password; // prevents passing password to client side
	return user
}

const User = mongoose.model('userProfiles', userSchema);

export default User;



