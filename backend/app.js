import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import brandRouter from "./router/brand.router.js";
import productRouter from "./router/product.router.js";
import userRouter from "./router/user.router.js";
import path from "path";
const app = express();


const publicpath=path.join(process.cwd(),'public');

app.use(express.static("images"));
app.use(express.static(publicpath));

app.use(cors());    
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

mongoose.set('strictQuery', true);

mongoose.connect('mongodb+srv://shubhamjoshi:MSFdRswTUJ00DXca@cluster0.w2m9xjp.mongodb.net/watch?retryWrites=true&w=majority',err=>{
    if(err)
     console.log(err);
     else
     console.log("Mongodb Connected");
});

app.use("/brand",brandRouter);
app.use("/product",productRouter);
app.use("/user",userRouter);
app.listen(3000,()=>{
    console.log("Server Started at 3000");
})