import mongoose from "mongoose";

const brandSchema = new mongoose.Schema({
    brandName:{
       type:String    
    },
    brandImage:{
        type:String
    }
});
export const Brand = mongoose.model("brands",brandSchema);