var webpack = require('webpack');

var path = require('path');

module.exports = {
	entry:[
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./src/index.jsx'
	],
	output:{
		path: path.join(__dirname, 'dist'),
		filename:'bundle.js',
		publicPath:'/static/'
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin()
	],
	module:{
		loaders:[

			{test:/\.js[x]?$/, loaders:['react-hot', 'babel-loader'], include:path.resolve(__dirname, 'src')},
			{test:/\.css$/, loader:'style!css',}
		]
	},
	resolve:{
		extensions:['','.js','.jsx','.json','css']
	},
	devtool:'cheap-module-source-map',

}