/** @type {import('next').NextConfig} */

const pathResolver = require("path");

const nextConfig = {
	reactStrictMode: true,

	images: {
		domains: ["localhost"],
	},
	webpack: (webpackConfig) => {
		webpackConfig.resolve.alias["~"] = pathResolver.resolve(__dirname);
		return webpackConfig;
	},
};

module.exports = nextConfig;
