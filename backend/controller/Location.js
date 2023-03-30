import { locationModel } from "../models/location.js";

export const addLocation = async (req, res) => {
  try {
    const location = new locationModel({
      humanReadableName: req.body.humanReadableName,
      address: req.body.address,
      phone: req.body.phone,
      multipleAssociatedDevices: req.body.multipleAssociatedDevices,
    });

    const details = await location.save();

    res.send({
      status: 200,
      details: details,
    });
  } catch (error) {
    console.error(error);
    res.send({
      status: 500,
      message: "Internal server error",
    });
  }
};

export const getAllLocations = async (req, res) => {
  const location = await locationModel.find({});
  res.send(location);
};

export const getSelectedLocation = async (req, res) => {
  const location = await locationModel.findOne({ _id: req.body.id });
  res.send(location);
  console.log(location);
};

export const updateLocation = async (req, res) => {
  try {
    const location = await locationModel.findOneAndUpdate(
      {
        _id: req.body.id,
      },
      {
        _id: req.body.id,
        humanReadableName: req.body.humanReadableName,
        address: req.body.address,
        phone: req.body.phone,
        multipleAssociatedDevices: req.body.multipleAssociatedDevices,
      },
      {
        new: true,
      }
    );

    if (location) {
      res.send({
        status: 200,
        location: location,
      });
    } else {
      res.send({
        status: 500,
        location: location,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteLocation = async (req, res) => {
  const location = await locationModel.findOneAndDelete({ _id: req.body.id });
  res.send(location);
};
