import MiniCssExtractPlugin from 'mini-css-extract-plugin'

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

export const buildCssLoader = (isDev: boolean) => {
    return {
        test: /\.s[ac]ss$/i,
        use: cssLoader('sass-loader', isDev),
    }
}
