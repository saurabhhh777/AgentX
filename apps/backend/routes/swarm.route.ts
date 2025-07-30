import { Router } from "express";
import { runSwarm } from "../controllers/swarm.controller";

const router = Router();

// POST /api/swarm/run
router.post("/run", runSwarm);

export default router;
