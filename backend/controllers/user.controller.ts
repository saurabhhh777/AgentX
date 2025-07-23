import { Request, Response } from "express";
import { verifySolanaSignature } from "../services/user.service";
import  Task  from "../models/task.model";
import { User } from "../models/user.model";

export const loginWithWallet = async (req: Request, res: Response) => {
  const { publicKey, signature, nonce } = req.body;

  try {
    const isValid = await verifySolanaSignature(publicKey, signature, nonce);
    if (!isValid) return res.status(401).json({ success: false, message: "Invalid signature" });

    // generate JWT here (mock token used)
    const token = "sample.jwt.token";

    res.status(200).json({ success: true, token });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};


export const getUserHistory = async (req: Request, res: Response) => {
  try {
    const { publicKey } = req.body;

    const history = await Task.find({ userWallet: publicKey }).sort({ timestamp: -1 });

    return res.status(200).json({ success: true, history });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message || "Failed to get user history" });
  }
};
