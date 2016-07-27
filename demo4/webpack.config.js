var webpack = require("webpack");
var path = require("path");

var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

module.exports = {
	entry: path.resolve(__dirname, 'index.js'),
	output:{
		path: path.resolve(__dirname, 'build'),
		filename:'bundle.js',
		publicPath:'build/'
	},
	module: {
		loaders:[
			{test: /\.js[x]?$/, exclude: /node_modules/,
			 loader: 'babel-loader?presets[]=es2015&presets[]=react' },
			{test:/\.css$/,loader:'style!css'},
			{test:/\.(png|jpg)$/, loader:'url-loader?limit=10000'}
		],
		noParse: [pathToReact]
	},
	resolve:{
		extension: ['','.js','.json','.jsx','.css']
	},
	devtool:'cheap-module-source-map',
};