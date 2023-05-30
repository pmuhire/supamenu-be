import mongoose from "mongoose";

const Schema = mongoose.Schema({
    fname: {
        type: String,
        require: true,
    },
    fname: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    mobile: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    }
}, 
{
    timestamps: true
})

const User = mongoose.model("User", Schema);

export default User;