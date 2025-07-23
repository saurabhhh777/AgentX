import express from "express";
import { summarizerController } from "../controllers/agents.controller";
const route = express.Router();



route.route("/summarize").post(summarizerController);


export default route;