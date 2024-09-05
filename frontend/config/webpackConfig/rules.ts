import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const rules = () => {
    const baseRulesSet: webpack.RuleSetRule[] = [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource',
            exclude: /node_modules/,
        },
        {
            test: /\.css$/,
            use: cssLoaders(''),
        },
        {
            test: /\.less$/,
            use: cssLoaders('less-loader'),
        },
        {
            test: /\.s[ac]ss$/,
            use: cssLoaders('sass-loader'),
        },
        {
            test: /\.(png|jpe?g|gif|svg|webp|ico)$/,
            type: 'asset/resource',
        },
        {
            test: /\.(csv)$/,
            use: ['csv-loader'],
        },
    ]
    return baseRulesSet
}

const cssLoaders = (loader: string) => {
    const loaders = [MiniCssExtractPlugin.loader, 'css-loader']
    if (loader) {
        loaders.push(loader)
    }
    return loaders
}

export default rules
