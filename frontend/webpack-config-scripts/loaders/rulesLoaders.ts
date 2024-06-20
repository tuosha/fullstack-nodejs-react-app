import cssLoaders from "./cssLoaders";
import babelLoaders from "./babelLoaders";

const rulesLoaders = () => {
    const rulesSet = [
        {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: 'ts-loader',
        },
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
    ]
    return rulesSet
}

export default rulesLoaders