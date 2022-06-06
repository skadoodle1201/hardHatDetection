const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const users = require("../controllers/users");

const passport = require("passport");

router.route("/register").post(catchAsync(users.SignUp));

router
	.route("/login")
	.post(passport.authenticate("local"), catchAsync(users.authenticate));

router.get("/logout", users.logout);

module.exports = router;
