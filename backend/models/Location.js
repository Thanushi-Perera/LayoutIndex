import mongoose from "mongoose";

const Schema = mongoose.Schema;

const locationSchema = new Schema({
  humanReadableName: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  multipleAssociatedDevices: { type: String, required: true },
});

export const locationModel = mongoose.model("location", locationSchema);
