import plugins from './plugins'
import { IBuildOptions } from './types/configTypes'
import { devServer } from './devServer'
import webpack from 'webpack'
import rules from './rules'
import optimization from './optimization'
import resolvers from './resolvers'

export const buildWebpackConfig = (options: IBuildOptions): webpack.Configuration => {
    const { paths, isDev, isEslint, fileName } = options
    return {
        mode: isDev ? 'development' : 'production',
        entry: paths.entry,
        devtool: isDev ? 'inline-source-map' : false,
        output: {
            path: paths.build,
            filename: `static/js/${fileName('js')}`,
            assetModuleFilename: 'static/assets/[hash][ext]',
            clean: true,
        },
        plugins: plugins(options),
        optimization: optimization(options),
        devServer: isDev || isEslint ? devServer(options) : {},
        module: {
            rules: rules(),
        },
        resolve: resolvers(options),
    }
}
