import {Configuration as DevServerConfiguration} from 'webpack-dev-server'

const devServer: DevServerConfiguration = {
    historyApiFallback: true,
    port: 3001,
    hot: true,
    allowedHosts: ['all'],
}

export default devServer