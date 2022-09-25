import mongoose from "mongoose";

const TokenSchema = new mongoose.Schema({
  creatorId: {
    type: String,
  },
});

export default mongoose.models.Token ||
  mongoose.model("Token", TokenSchema, "tokens");