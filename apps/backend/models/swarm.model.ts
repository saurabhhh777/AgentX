import mongoose from "mongoose";

const swarmSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    agents: [
      {
        name: String,
        task: String,
      },
    ],
    result: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Swarm = mongoose.model("Swarm", swarmSchema);
