import webpack from 'webpack'
import { buildCssLoader } from '../webpackConfig/loaders/cssLoader'
import path from 'path'
import { IPaths } from '../webpackConfig/types/configTypes'

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: IPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        public: '',
        assets: '',
    }
    config.resolve.modules.push(paths.src)
    config.resolve.extensions.push('.ts', '.tsx')
    config.module.rules = config.module.rules.map((rule: webpack.RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i }
        }
        return rule
    })

    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    })

    config.module.rules.push(buildCssLoader(true))

    config.plugins.push(
        new webpack.DefinePlugin({
            __IS_DEV: true,
        }),
    )

    return config
}
