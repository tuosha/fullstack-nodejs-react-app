import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import {isProd} from "./modes";

const optimization = () => {
    const config = {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: "all"
        },
        minimize: <boolean> false,
        minimizer: <Array<object>>[]
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