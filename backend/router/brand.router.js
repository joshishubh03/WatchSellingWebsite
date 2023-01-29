import express from "express";
import {save,list,remove,edit} from "../controller/brand.controller.js";
import multer from "multer";
const upload  = multer({dest:'public/images'});
const Router = express.Router();

Router.get("/list",list);
Router.post("/save",upload.single("brandImage"),save);
Router.post("/edit",edit);
Router.post("/delete",remove);

export default Router; 