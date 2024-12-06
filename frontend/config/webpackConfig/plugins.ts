import webpack, { WebpackPluginInstance } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { IBuildOptions } from './types/configTypes'
import ESLintWebpackPlugin from 'eslint-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

const plugins = ({ paths, isDev, isProd, isEslint, isBundleAnalyzer, fileName }: IBuildOptions) => {
    const basePlugins: WebpackPluginInstance[] = [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin(
            Object.assign(
                {
                    template: paths.html,
                    filename: 'index.html',
                },
                isDev || {
                    minify: {
                        collapseWhitespace: isProd,
                        removeComments: isProd,
                    },
                },
            ),
        ),
        new MiniCssExtractPlugin({
            filename: `static/css/${fileName('css')}`,
            chunkFilename: `static/css/${fileName('css')}`,
        }),
    ]
    if (isEslint) {
        basePlugins.push(
            new ESLintWebpackPlugin({
                extensions: ['js', 'jsx', 'ts', 'tsx'],
                context: paths.src,
            }),
        )
    }
    if (isBundleAnalyzer) {
        const bundleAnalyzer = new BundleAnalyzerPlugin()
        basePlugins.push(bundleAnalyzer)
    }
    return basePlugins
}

export default plugins
