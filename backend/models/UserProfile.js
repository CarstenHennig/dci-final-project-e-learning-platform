import mongoose from 'mongoose';
import { hash, compare } from '../libs/hashGenerate.js';

const required = true;


const userSchema = mongoose.Schema({

	firstName: {
		type: String, required,
		minLength: 3
	},
	lastName: {
		type: String,required,
		minLength: 3
	},
	email: {
		type: String, required,
		
		
	},
	password: {
		type: String, required,
		minLength: 8,
		
		
		
	},
	avatar: String,
	dateOfBirth: Number,
	address: {
		city: String,
		street: String,
		zip: Number,
		country: String,
	},
	phoneNumber: Number,
	followers: {
		type: Number,
		default: 0,
	},
	followed: {
		type: Number,
		default: 0,
	},
	blogPosts: {
		title: String,
		body: String,
	},
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
		default: new Date(),
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

// Convert User object to simplified JSON
userSchema.methods.toJSON= function(){
	const user = this.toObject()
	delete user.password;
	return user
}

const User = mongoose.model('userProfiles', userSchema);

export default User;



