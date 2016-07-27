var webpack = require("webpack");

module.exports = {
	entry:'./main.js',
	output:{
		path:'build',
		filename: 'bundle.js'
	},
	module:{
		loaders:[
			{test:/\.js[x]?$/, loader:'babel-loader', exclude: /node_modules/},
		]
	}
}