import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:"user"
        },
    productId:[
        {
            type:mongoose.Schema.ObjectId,
            ref:"product"
        }
    ]

})