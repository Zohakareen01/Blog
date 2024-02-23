import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username:{
        stype: String,
        required:true,
        unique:true,
    },
    email:{
        stype: String,
        required:true,
        unique:true,
    },
    username:{
        stype: String,
        required:true,

    },
},{timestamps:true}
);

const User = mongoose.model('User', userSchema);
export default User;