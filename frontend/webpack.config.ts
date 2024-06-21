import path from 'path'
import webpack from "webpack";
import rulesLoaders from './webpack-config-scripts/rulesLoaders'
import plugins from "./webpack-config-scripts/plugins";
import optimization from "./webpack-config-scripts/optimization";
import devServer from "./webpack-config-scripts/devServer";
import {fileName, isDev, __dirname} from "./webpack-config-scripts/modes";

const config: webpack.Configuration = {
	mode: 'development',
	context: path.resolve(__dirname, '../src'),
	devtool: isDev ? 'source-map' : false,
	target: isDev ? "web" : "browserslist",
	entry: {
		bundle: './index.tsx',
	},
	output: {
		filename: `static/js/${fileName('js')}`,
		path: path.resolve(__dirname, '../dist/'),
		assetModuleFilename: 'static/media/[name].[hash][ext]',
		clean: true,
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx'],
		alias: {
			'@images': path.resolve(__dirname, 'src/assets/images'),
			'@': path.resolve(__dirname, 'src')
		},
	},
	devServer: devServer,
	optimization: optimization(),
    plugins: plugins(),
	module: {
		rules: rulesLoaders()
	},
    stats: {
        children: true
    }
}

export default config;