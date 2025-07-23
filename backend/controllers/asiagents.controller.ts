import { Request, Response } from "express";
import { getASIResponse } from "../services/asiagent.service";

export const createASIResponse = async (req: Request, res: Response) => {
  try {
    const { input } = req.body;

    const result = await getASIResponse(input);

    return res.status(200).json({
      success: true,
      result,
    });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      message: err.message || "Failed to process ASI agent request",
    });
  }
};


export const getAllAgents = async (req: Request, res: Response) => {
  try {
    const agents = await Agent.find();
    return res.status(200).json({
      success: true,
      agents,
    });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      message: err.message || "Failed to get agents",
    });
  }
}
