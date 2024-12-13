import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const rules = (isDev: boolean) => {
    const baseRulesSet: webpack.RuleSetRule[] = [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.css$/i,
            use: cssLoader('', isDev),
        },
        {
            test: /\.s[ac]ss$/i,
            use: cssLoader('sass-loader', isDev),
        },
        {
            test: /\.less$/,
            use: cssLoader('less-loader', isDev),
        },
        {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        },
        {
            test: /\.(png|jpe?g|gif|webp|ico)$/,
            type: 'asset/resource',
        },
        {
            test: /\.(csv)$/,
            use: ['csv-loader'],
        },
    ]
    return baseRulesSet
}

const cssLoader = (loader: string, isDev: boolean) => {
    const loaders = [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                modules: {
                    auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                    namedExport: false,
                    localIdentName: isDev ? '[path][name]__[local]-[hash:base64:5]' : '[hash:base64:8]',
                },
            },
        },
    ]
    if (loader) {
        loaders.push(loader)
    }
    return loaders
}

export default rules
