import mongoose, { Schema, Document } from "mongoose";

export interface ITask extends Document {
    userWallet: string;             // User wallet address
    taskType: "summarize" | "swarm"; // Task type
    inputData: any;                 // Input to agent (e.g., PDF URL or swarm config)
    resultData: any;                // Output from agent/s
    timestamp: Date;                // When task was created
}

const TaskSchema: Schema = new Schema(
    {
        user: { 
            type: Schema.Types.ObjectId,
            ref: "User" 
        },
        taskType: {
            type: String,
            enum: ["summarize", "swarm"],
            required: true,
        },
        inputData: {
            type: Schema.Types.Mixed, // JSON, PDF URL, swarm config etc.
            required: true,
        },
        resultData: {
            type: Schema.Types.Mixed,
            default: null,
        },
        timestamp: {
            type: Date,
            default: Date.now,
        },
    },
    {
        versionKey: false,
    }
);

export default mongoose.model<ITask>("Task", TaskSchema);
