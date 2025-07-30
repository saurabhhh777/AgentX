import { Request, Response } from "express";
import { executeSwarmTask } from "../services/swarm.service";

export const runSwarm = async (req: Request, res: Response) => {
  try {
    const { question } = req.body;

    const result = await executeSwarmTask(question);

    return res.status(200).json({
      success: true,
      message: "Swarm executed successfully",
      result,
    });
  } catch (err: any) {
    console.error("Swarm execution error:", err.message);
    return res.status(500).json({
      success: false,
      message: err.message || "Swarm execution failed",
    });
  }
};
