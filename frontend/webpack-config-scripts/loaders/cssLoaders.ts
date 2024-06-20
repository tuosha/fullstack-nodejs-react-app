import MiniCssExtractPlugin from "mini-css-extract-plugin";

const cssLoaders = (loader: string) => {
    const loaders = [MiniCssExtractPlugin.loader, 'css-loader']
    if (loader){
        loaders.push(loader)
    }
    return loaders
}

export default cssLoaders