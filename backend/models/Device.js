import mongoose from "mongoose";

const Schema = mongoose.Schema;

const deviceSchema = new Schema({
  serialNumber: { type: String, required: true },
  type: { type: String, required: true },
  image: { type: String },
  status: { type: String, required: true },
});

export const deviceModel = mongoose.model("device", deviceSchema);
