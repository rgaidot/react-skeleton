const webpack = require('webpack');
const path = require('path');
const ignore = new webpack.IgnorePlugin(/\.svg$/);

module.exports = {
    progress: true,
    devtool: 'source-map',
    entry: {
        main: [
            './src/application.js',
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
        ],
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: '/assets/',
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [
                    'react-hot',
                    `babel?${JSON.stringify({ presets: ['react', 'es2015', 'stage-0'] })}`,
                ],
                exclude: /node_modules/ },
            {
                test: /\.(scss|sass)$/,
                loaders: [
                    'style',
                    'css',
                    'autoprefixer',
                    'sass?outputStyle=expanded',
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'url?limit=1000',
                    'img',
                ],
            },
        ],
    },
    plugins: [ignore],
    devServer: {
        host: '0.0.0.0',
        proxy: {},
    },
};
