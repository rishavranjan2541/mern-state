import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    avatar:{
        type: String,
        default: "https://pixabay.com/vectors/user-people-man-avatar-297330/"
    },

}, {timestamps:true});

const User = mongoose.model('User', userSchema);

export default User;