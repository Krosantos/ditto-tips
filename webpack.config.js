const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CssModuleLoader = {
	loader: 'css-loader',
	query: {
		modules: {
			localIdentName: '[local]__[hash:base64:5]',
		},
	},
};

module.exports = {
	devServer: {
		contentBase: path.join(__dirname, 'static'),
		filename: '/static/bundle.js',
		historyApiFallback: true,
		port: 3000,
		publicPath: '/static/',
	},
	entry: './static/index.js',
	mode: process.env.FROM_LOCAL ? 'development' : 'production',
	module: {
		rules: [{
			exclude: /(node_modules)/,
			loader: 'babel-loader',
			options: { presets: ['@babel/preset-env'] },
			test: /\.(js|jsx)$/,
		},
		{
			rules: [{
				test: /\.(scss|css)$/,
				use: [
					// fallback to style-loader in development
					process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
					CssModuleLoader,
					'sass-loader',
				],
			}],
		},
		{
			test: /\.env$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: '.env',
				},
			}],
		},
		{
			test: /\.html$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
				},
			}],
		},
		{
			test: /\.(eot|ttf|woff|woff2)$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
				},
			}],
		},
		{
			test: /\.(png|svg|jpg|gif|ico)$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
				},
			},
			],
		},
		],
	},
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'dist'),
		publicPath: 'static/',
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new MiniCssExtractPlugin(),
	],
	resolve: {
		alias: {
			'@images': path.resolve(__dirname, 'static', 'images'),
			'@pages': path.resolve(__dirname, 'src', 'pages'),
			'@shared': path.resolve(__dirname, 'src', 'shared'),
			'@theme': path.resolve(__dirname, 'src', 'theme'),
			'@utils': path.resolve(__dirname, 'src', 'utils'),
		},
		extensions: ['*', '.js', '.jsx'],
	},
};
