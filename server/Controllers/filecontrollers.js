const { FileModel } = require("../Models/file.model");
const mongoose = require("mongoose");

async function getFile(req, res) {
  const files = await FileModel.find({ user: req.body.user._id });
  res.json(files);
}

async function deleteFile(req, res) {
  const deletedFile = await FileModel.findByIdAndDelete(req.params.id);
  res.json(deletedFile);
}

function uploadFile(req, res) {
  const { name, fileType, isProtected, password, pic } = req.body;

  const file = new FileModel({
    name,
    fileType,
    isProtected,
    password,
    fileData: pic,
    user: req.body.user._id,
  });
  file
    .save()
    .then((savedFile) => {
      res.json({ file: savedFile });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error saving file");
    });
}

function getSingleFile(req, res) {
  const { id } = req.params;

  if (mongoose.Types.ObjectId.isValid(id)) {
    FileModel.findById(id)
      .then((file) => {
        if (!file) {
          res.status(404).send("File not found");
        } else {
          res.send(file);
        }
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send("Error getting file");
      });
  } else {
    return res.status(404).send("File not found");
  }
}

module.exports = { getFile, uploadFile, getSingleFile, deleteFile };
