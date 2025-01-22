// craco.config.js
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
	webpack: {
		configure: (webpackConfig) => {
			webpackConfig.resolve.plugins = [
				...(webpackConfig.resolve.plugins || []),
				new TsconfigPathsPlugin({
					configFile: './tsconfig.json',
				}),
			];
			// Modify devServer settings
			if (!webpackConfig.devServer) {
				webpackConfig.devServer = {};
			}

			webpackConfig.devServer = {
				...webpackConfig.devServer,
				host: '0.0.0.0', // Ensure it's listening on all interfaces
				port: 4000, // Ensure the app listens on port 4000
				watchOptions: {
					poll: 1000, // Same polling settings for the dev server
					aggregateTimeout: 300,
					ignored: /node_modules/,
				},
				setupMiddlewares: (middlewares) => {
					// If you previously had any custom middlewares in onAfterSetupMiddleware, migrate them here
					console.log('Custom middlewares can be added here if needed.');
					return middlewares; // Return the default middlewares
				},
			};

			return webpackConfig;
		},
	},
};
