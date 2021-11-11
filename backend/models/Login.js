import mongoose from "mongoose";


const required = true;
const { Schema } = mongoose;

export const RegisterSchema = new Schema({
	email: String, required,
	password: {
		type: String, required,

	}

});

export const User = mongoose.model("userProfiles", RegisterSchema);

