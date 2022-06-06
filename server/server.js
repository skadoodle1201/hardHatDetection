const express = require("express");
const app = express();
const path = require("path");
const cookieparser = require("cookie-parser");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const session = require("express-session");
const cors = require("cors");

const userRoutes = require("./routes/users");

const passport = require("passport");
const User = require("./models/users");
const LocalStrategy = require("passport-local");

const dbUrl = "mongodb://localhost:27017/hard-hat";

mongoose.connect(dbUrl, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
	console.log("database connected");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public/")));

app.use(cookieparser());
const sessionConfig = {
	secret: "thisshouldbeabettersecret!",
	resave: false,
	saveUninitialized: true,
	cookie: {
		httpOnly: true,
		expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
		maxAge: 1000 * 60 * 60 * 24 * 7,
	},
};

app.use(
	cors({
		origin: "http://localhost:3000",
		credentials: true,
	})
);

app.use(session(sessionConfig));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
	res.locals.currentUser = req.user;
	next();
});

app.use("/", userRoutes);

app.listen(5000, () => {
	console.log("Listening on Port 5000");
});
