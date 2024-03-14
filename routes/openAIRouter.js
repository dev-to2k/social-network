const router = require("express").Router();
const dotenv = require("dotenv");
const { openai } = require("../server");
const auth = require("../middleware/auth");
const aiChatCtrl = require("../controllers/aiChatCtrl");
const userCtrl = require("../controllers/userCtrl");
dotenv.config();

router.post("/aiChat", auth, aiChatCtrl.aiChat);
router.get("/bot/:id", auth, userCtrl.getUser);

module.exports = router;
