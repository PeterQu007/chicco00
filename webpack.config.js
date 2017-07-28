//webpack video : 818990 - 38 - The JS Module Pattern and _webpack_ @7:00
//babel to transpile the es6 yo es5
//bundle the modules
//transpile es6 to es5

var path=require('path');
var webpack=require('webpack');

module.exports={
	
	entry: {
		App: "./app/assets/scripts/app.js",
		Background: "./app/background/background.js",
		Popup: "./app/popup/popup.js",
		AutoPost: "./app/content/autoPost.js",
		GoBackPrevURL: "./app/content/goBackPrevURL.js",
		'@Login': "./app/content/@login.js",
		SelectPostCat: "./app/content/selectPostCat.js",
		SelectPostType: "./app/content/selectPostType.js",
		SelectPostLocation: "./app/content/selectPostLocation.js",
		GeoVerify: "./app/content/geoVerify.js",
		EditImage: "./app/content/editImage.js",
		PassRealGuide: "./app/content/passRealGuide.js",
		CgManager: "./app/content/cgManager.js",
		Delete: "./app/content/delete.js"

	},

	output: {
		path: "./app/temp/scripts",
		filename: "[name].js"
	},
	
	//integrid babel with webpack
	//transpile js files
	module: {
		loaders: [
			{
				//"test" is commonly used to match the file extension
				test: /\.js$/,

				exclude: /node_modules/ ,

				loader: 'babel-loader',

				query: { presets: ['es2015'] }
			}
		]
	},

	//resolveLoader: { 
	//	//root: path.join(__dirname, "node_modules") 
	//	modules: ['node_modules', path.join(__dirname, "node_modules") ]
	//}
}