const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        static: './dist',
    },
    module: {
      rules: [
            {
							test: /\.m?js$/,
							exclude: /(node_modules|bower_components)/,
							use: {
								loader: 'babel-loader',
								options: {
										presets: ['@babel/preset-env']
								}
							}
            },
						/* V5! */
						{
							test: /\.(png|svg|jpg|jpeg|gif)$/i,
							type: 'asset/resource',
						},
						{
						  test: /\.html$/i,
						  loader: "html-loader",
						},
						{
						  test: /\.css$/i,
						  use: [
								MiniCssExtractPlugin.loader, {
									loader: "css-loader",
									options: {
										importLoaders: 1,
									},
								},
								"postcss-loader", 
							],
						},
        ]
    },
    plugins: [
			new HtmlWebpackPlugin({
        title: 'mesto template',
        template: 'index.html',
        inject: 'body'
			}),
			new MiniCssExtractPlugin(),
			
		]
};