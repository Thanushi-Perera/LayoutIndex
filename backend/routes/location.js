import express from "express";

//Controllers
import {
  addLocation,
  getAllLocations,
  deleteLocation,
  getSelectedLocation,
  updateLocation,
} from "../controller/Location.js";

const router = express.Router();

router.post("/addLocation", addLocation);
router.get("/getAllLocations", getAllLocations);
router.post("/deleteLocation", deleteLocation);
router.post("/getSelectedLocation", getSelectedLocation);
router.post("/updateLocation", updateLocation);

export default router;
