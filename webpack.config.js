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
				{ from: "node_modules/jquery/dist/jquery.min.js", to: "lib" },
				{ from: "node_modules/slick-carousel/slick/slick.min.js", to: "lib" },
			],
		}),
		new HtmlWebpackPlugin({
			template: "index.html",
			minify: true,
		}),
	],
};
