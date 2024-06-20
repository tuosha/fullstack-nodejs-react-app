const babelLoaders = (preset: string) => {
    const loaders = {
        loader: "babel-loader",
        options: {
            cacheDirectory: true,
            presets: [
                '@babel/preset-env',
            ],
        }
    }
    if (preset) {
        loaders.options.presets.push(preset)
    }
    return loaders
}

export default babelLoaders