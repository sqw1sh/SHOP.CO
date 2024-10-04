const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	mode: "development",
	output: {
		filename: "index.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	devServer: {
		static: "./dist",
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{ from: "src/images", to: "images" },
				{ from: "src/styles", to: "styles" },
				{ from: "src/fonts", to: "fonts" },
			],
		}),
		new HtmlWebpackPlugin({
			template: "index.html",
			minify: true,
		}),
	],
};
