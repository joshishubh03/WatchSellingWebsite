import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    brandName:{
        type:String,
        required:true
    },
    productPrice:{
        type:Number,
        required:true
    },
    productDesc:{
        type:String,
        required:true
    },
    productColor:{
        type:String
    },
    productOffer:{
        type:String
    },
    productSold:{
        type:Number
    },
    productImage:[{
        type:String
    }],    
    
});
export const Product = mongoose.model("product",productSchema);