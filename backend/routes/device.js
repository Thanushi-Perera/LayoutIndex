import express from "express";

//Controllers
import {
  addDevice,
  getAllDevices,
  deleteDevice,
  getSelectedDevice,
  updateDevice,
} from "../controller/device.js";

const router = express.Router();

router.post("/addDevice", addDevice);
router.get("/getAllDevices", getAllDevices);
router.post("/deleteDevice", deleteDevice);
router.post("/getSelectedDevice", getSelectedDevice);
router.post("/updateDevice", updateDevice);

export default router;
