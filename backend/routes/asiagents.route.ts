import express from "express";
import { createASIResponse,getAllAgents } from "../controllers/asiagents.controller";

const router = express.Router();

router.post("/create", createASIResponse);
router.get("/", getAllAgents);

export default router;
