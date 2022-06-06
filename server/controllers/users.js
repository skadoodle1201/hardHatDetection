const User = require("../models/users");

module.exports.SignUp = async (req, res, next) => {
	try {
		const { email, username, password } = req.body;
		const user = new User({ email, username });

		const registeredUser = await User.register(user, password);
		req.login(registeredUser, (err) => {
			if (err) return next(err);
			res.status(200).json({ nextPage: "/detection", message: "Welcome" });
		});
	} catch (e) {
		res.status(400).json({ message: "Something Went Wrong" });
	}
};

module.exports.authenticate = async (req, res) => {
	console.log(req);
	res.status(200).json({ nextPage: "/detection", message: "Welcome" });
};

module.exports.logout = (req, res) => {
	req.logout();
	res.status(200).json({ message: "logged out" });
};
