module.exports.isLoggedIn = (req, res, next) => {
	if (!req.isAuthenticated()) {
		req.session.returnTo = req.originalUrl;
		return res.json({ message: "Please Login", pageUrl: "/" });
	}
	next();
};
