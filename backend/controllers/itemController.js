const Item = require("../models/itemModel");
const path = require("path");
const asyncWrapper = require("../middleware/asyncWrapper");


const getItems = async (req, res) => {
  try {
    const items = await Item.find().populate('user', 'firstName');
    res.status(200).json({ items });
  } catch (error) {
    console.log(error);
  }
};

const addItem = asyncWrapper(async (req, res) => {
    
  const { name } = req.body;
  if (!req.file){
    return res.status(400).json({ error: 'No file provided'})
  }
  const file = req.file.path;
  const item = await Item.create({ name, file, user: req.user.id});
  res.status(201).json({ item });
});

const downloadFile = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const item = await Item.findById(id);
  if (!item) {
    return next(new Error("No item found"));
  }
  const file = item.file;
  const filePath = path.join(__dirname, `../${file}`);
  res.download(filePath);
});

//delete file
const deleteItem = asyncWrapper (async (req, res, next) =>{
 
      const item = await Item.findByIdAndRemove(req.params.id);
      res.status(200).json({
          success: true,
          message: "File deleted"
      })
      

})

module.exports = {
  getItems,
  addItem,
  downloadFile,
  deleteItem,
};