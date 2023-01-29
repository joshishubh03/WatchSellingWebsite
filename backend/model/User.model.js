import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    userName:{
        type:String
        },
    password:{
         type:String
        }

});

export const User = mongoose.model("user",userSchema);