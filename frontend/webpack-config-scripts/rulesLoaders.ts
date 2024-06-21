import cssLoaders from "./cssLoaders";
import babelLoaders from "./babelLoaders";
import webpack from "webpack";
import {isBabelLoader} from "./modes";

const rulesLoaders = () => {
    const rulesSet: webpack.RuleSetRule[] = [
        {
            test: /\.css$/,
            use: cssLoaders(''),
        },
        {
            test: /\.less$/,
            use: cssLoaders('less-loader')
        },
        {
            test: /\.s[ac]ss$/,
            use: cssLoaders('sass-loader')
        },
        {
            test: /\.(png|jpe?g|gif|svg|webp|ico)$/,
            type: 'asset/resource'
        },
        {
            test: /\.(xml)$/,
            use: ['xml-loader']
        },
        {
            test: /\.(csv)$/,
            use: ['csv-loader']
        },

    ]
    if (isBabelLoader) {
        rulesSet.push(
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: babelLoaders('')
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: babelLoaders('@babel/preset-react')
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: babelLoaders('@babel/preset-typescript')
            })
    } else {
        rulesSet.push(
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            })
    }

    return rulesSet
}

export default rulesLoaders