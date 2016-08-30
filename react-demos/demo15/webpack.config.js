var webpack = require('webpack');

var path = require('path');

var devConfig = {
	entry:'./src/entry.jsx',
	output:{
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module:{
		loaders:[
			{test:/\.js[x]?$/, loader:'babel-loader', exclude:/node_modules/, include:__dirname}
		]
	}
}

module.exports = devConfig;