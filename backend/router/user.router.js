import express from "express";
import {save,list} from "../controller/user.controller.js";
const Router = express.Router();

Router.post("/save",save);
Router.get("/list",list);

export default Router;