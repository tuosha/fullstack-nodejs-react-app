import path from "path";
import webpack from "webpack";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import Dotenv from "dotenv-webpack";
import {fileName, isDev, __dirname, isProd, isBundleAnalyzer, isEslintErrors} from "./modes";

const plugins = () => {
    const basePlugins: webpack.WebpackPluginInstance[] = [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin(
            Object.assign({
                template: path.resolve(__dirname, '../public/index.html'),
                filename: 'index.html',
            }, isDev || {
                minify: {
                    collapseWhitespace: isProd,
                    removeComments: isProd
                },
                apiUrl: ''
            })
        ),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'public/'),
                    to: path.resolve(__dirname, 'dist'),
                    noErrorOnMissing: true,
                    globOptions: {
                        ignore: ['**/index.*']
                    }
                },
            ],
        }),
        new MiniCssExtractPlugin({
            filename: `static/css/${fileName('css')}`,
        }),
    ]
    if (isBundleAnalyzer) {
        const bundleAnalyzer = new BundleAnalyzerPlugin()
        basePlugins.push(bundleAnalyzer)
    }
    if (isEslintErrors) {
        const eslintPlugin = new ESLintPlugin({
            context: '../',
            extensions: ["js", "jsx", "ts", "tsx"],
            }
        )
        basePlugins.push(eslintPlugin)
    }
    if (isDev || isEslintErrors) {
        basePlugins.push(new Dotenv())
    }

    return basePlugins
}

export default plugins
