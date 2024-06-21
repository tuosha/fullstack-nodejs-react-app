import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import {isProd} from "./modes";
import webpack from "webpack";

const optimization= () => {
    const config: webpack.Configuration['optimization'] = {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: "all"
        },
        minimize: false,
        minimizer: []
    }
    if (isProd) {
        config.minimize = true
        config.minimizer = [
            new CssMinimizerPlugin(),
            new TerserPlugin({
                extractComments: false,
            }),
        ]
    }
    return config
}

export default optimization