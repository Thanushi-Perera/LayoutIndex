import { deviceModel } from "../models/Device.js";

export const addDevice = async (req, res) => {
  try {
    const serialNumber = req.body.serialNumber;
    const type = req.body.type;
    let image = "";
    if (req.file !== undefined) {
      image = req.file.path;
    }
    const status = req.body.status;

    const device = new deviceModel({
      serialNumber,
      type,
      image,
      status,
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
