var webpack = require("webpack");
var path = require("path");

var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

module.exports = {
	entry: path.resolve(__dirname, 'src/entry.js'),
	output:{
		path: path.resolve(__dirname, 'build'),
		filename:'bundle.js'
	},
	module: {
		loaders:[
			{test: /\.js[x]?$/, exclude: /node_modules/,
			 loader: 'babel-loader?presets[]=es2015&presets[]=react' },
			{test:/\.css$/,loader:'style!css'}
		],
		noParse: [pathToReact]
	},
	resolve:{
		extension: ['','.js','.json','.jsx','.css']
	}
};