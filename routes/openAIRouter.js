const router = require("express").Router();
const dotenv = require("dotenv");
const multer = require("multer");
const { openai } = require("../server");
const auth = require("../middleware/auth");
const aiChatCtrl = require("../controllers/aiChatCtrl");
const userCtrl = require("../controllers/userCtrl");
const fs = require("fs");
dotenv.config();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploaded_id = req.user._id;
    const path = `./public/documents/${uploaded_id}`;
    fs.mkdirSync(path, { recursive: true });
    return cb(null, path);
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}_${file.originalname}`);
  },
});
const upload = multer({ storage });
router.post("/aiChat", auth, aiChatCtrl.aiChat);
router.get("/bot/:id", auth, userCtrl.getUser);
router.get("/chatPdf/:uid/:id", auth, aiChatCtrl.aiChatPdf);
router.get("/upload/files", auth, aiChatCtrl.getFiles);
router.post("/chatPdf/upload", auth, upload.single("file"), aiChatCtrl.upload);

module.exports = router;
