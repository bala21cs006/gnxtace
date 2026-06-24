const express = require("express");
const {
  register,
  login,
} = require("../controllers/authController");
const { noprotect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", noprotect, register);
router.post("/login", noprotect, login);


module.exports = router;
