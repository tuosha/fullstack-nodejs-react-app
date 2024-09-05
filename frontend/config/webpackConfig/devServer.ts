import { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { IBuildOptions } from './types/configTypes'

export const devServer = ({ PORT }: IBuildOptions): DevServerConfiguration => {
    return {
        historyApiFallback: true,
        port: PORT,
        hot: true,
        allowedHosts: ['all'],
    }
}
