import mongoose from "mongoose";

const required = true;

export const RegisterSchema = mongoose.Schema({
    firstName: {
        type: String, required,
        minLength: 3
    },
    lastName: {
        type: String, required,
        minLength: 3
    },
    email: String,
    password: {
        type: String, required,
        minLength: 8,
        maxLength: 12
    }

});

export const User = mongoose.model("userProfiles", RegisterSchema);

