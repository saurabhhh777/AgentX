import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    walletAddress: {
      type: String,
      required: true,
      unique: true,
    },
    nonce: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
