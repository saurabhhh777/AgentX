import express from "express";
import { loginWithWallet,getUserHistory } from "../controllers/user.controller";

const router = express.Router();

router.post("/login", loginWithWallet);
router.get("/history", getUserHistory);

export default router;
