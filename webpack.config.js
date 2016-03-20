var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'eval-source-map',
    entry: {
        'hello-world':'./entries/TodoHomePage.js',
    },
    output: {
        path: path.join(__dirname, './dist/js'),
        filename: 'bundle.caz.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                  cacheDirectory: true, 
			      presets: ['react', 'es2015'],
			      plugins: ['transform-runtime']
			    }
            },
            { test: /globalize/, loader: 'imports?define=>false' }
        ]
    }
};
