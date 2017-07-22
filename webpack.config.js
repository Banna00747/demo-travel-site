var path = require('path');

module.exports = {
  entry: './app/assets/scripts/App.js',
  output: {
    filename: 'App.js',
    path: path.resolve(__dirname, './app/temp/scripts')
  },
  module: {
		loaders: [
          {
          	loader: 'babel-loader',
          	query: {
          		presets: ['es2015']
          	}, 
          	test: /\.js$/,
          	exclude: /node_modules/
          }

		]
	}

};


























// module.exports = {
// 	entry: './app/assets/scripts/App.js',
// 	output: {
// 	  path:  "./app/temp/scripts",
// 	  filename: "App.js"
// 	},
// 	module: {
// 		loaders: [
//           {
//           	loader: 'babel',
//           	query: {
//           		presets: ['es2015']
//           	}, 
//           	test: /\.js$/,
//           	exclude: /node_modules/
//           }

// 		]
// 	}
// };



// // module.exports = {
// //     entry: __dirname + '/index.js',
// //     output: {
// //         filename: 'output.js',
// //         path: __dirname,
// //         library: "Test",
// //         libraryTarget: "commonjs2",
// //     },
// //     externals: {
// //         react: "React",
// //     },
// // };



// module.exports = {
// 	entry: '/app/assets/scripts/App.js',
// 	output: {
// 	  path:  "/app/temp/scripts",
// 	  filename: "App.js"
// 	},
// 	module: {
// 		loaders: [
//           {
//           	loader: 'babel-loader',
//           	query: {
//           		presets: ['es2015']
//           	}, 
//           	test: /\.js$/,
//           	exclude: /node_modules/
//           }

// 		]
// 	}
// };



