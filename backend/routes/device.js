import express from "express";

//Controllers
import {
  addDevice,
  getAllDevices,
  deleteDevice,
  getSelectedDevice,
  updateDevice,
} from "../controller/Device.js";

const router = express.Router();

import multer from "multer";
import { storage } from "../cloudinary/index.js";
const upload = multer({ storage });

router.post("/addDevice", upload.single("image"), addDevice);
router.get("/getAllDevices", getAllDevices);
router.post("/deleteDevice", deleteDevice);
router.post("/getSelectedDevice", getSelectedDevice);
router.post("/updateDevice", updateDevice);

export default router;
