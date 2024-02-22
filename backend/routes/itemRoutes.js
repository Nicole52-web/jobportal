const upload = require("../middleware/multer");
const express = require("express");

const { getItems, addItem, downloadFile, deleteItem } = require("../controllers/itemController");
const { isAuthenticated, isAdmin } = require("../middleware/auth");

const router = express.Router();

router.route("/upload").post( isAuthenticated, upload.single("file"), addItem);
router.route("/upload").get(isAuthenticated, isAdmin, getItems);
router.route("/download/:id").get(isAuthenticated, isAdmin, downloadFile);
router.route('/item/delete/:id').delete(isAuthenticated, isAdmin, deleteItem);

module.exports = router;