import { deviceModel } from "../models/device.js";


export const addDevice = async (req, res) => {
    try {

    const device = new deviceModel({
      serialNumber: req.body.serialNumber,
      type: req.body.type,
      image: req.body.image,
      status: req.body.status,
    });
    

    const details = await device.save();

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

export const getAllDevices = async (req, res) => {
  const device = await deviceModel.find({});
  res.send(device);
};

export const getSelectedDevice = async (req, res) => {
  const device = await deviceModel.findOne({ _id: req.body.id });
  res.send(device);
};

export const updateDevice = async (req, res) => {
  try {
    const device = await deviceModel.findOneAndUpdate(
      {
        _id: req.body._id,
      },
      {
        _id: req.body.id,
        serialNumber: req.body.serialNumber,
        type: req.body.type,
        image: req.body.image,
        status: req.body.status,
      },
      {
        new: true,
      }
    );
    
    if (device) {
      res.send({
        status: 200,
        device: device,
      });
    } else {
      res.send({
        status: 500,
        device: device,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteDevice = async (req, res) => {
  const device = await deviceModel.findOneAndDelete({ _id: req.body.id });
  res.send(device);
};
