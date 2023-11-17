const express = require("express");
const router = express.Router();
const { signup, signin, logout, userProfile } = require("../controllers/authControllers");
const { isAuthenticated } = require("../middleware/auth");

//authRoutes
// /api/signup
router.post('/signup', signup);

// /api/signin
router.post('/signin', signin);

// /api/logout
router.get('/logout', logout);

// /api/me
router.get('/me',isAuthenticated, userProfile);




module.exports = router;