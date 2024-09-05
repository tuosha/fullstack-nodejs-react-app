import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import webpack from 'webpack'
import { IBuildOptions } from './types/configTypes'

const optimization = ({ isProd }: IBuildOptions) => {
    const config: webpack.Configuration['optimization'] = {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
        },
        minimize: false,
        minimizer: [],
    }
    if (isProd) {
        config.minimize = true
        config.minimizer = [
            new CssMinimizerPlugin(),
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),
        ]
    }
    return config
}

export default optimization
