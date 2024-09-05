import path from 'path'
import { buildWebpackConfig } from './config/webpackConfig/buildWebpackConfig'

const isDev: boolean = process.env.NODE_ENV === 'development'
const isProd: boolean = !isDev
const isEslint: boolean = process.env.NODE_ENV === 'eslint_mode'
const isBundleAnalyzer: boolean = process.env.NODE_ENV === 'bundle_analyzer'
const fileName = (ext: string): string => (isDev ? `[name].${ext}` : `[name][contenthash].${ext}`)
const PORT: number = 3001
const paths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    src: path.resolve(__dirname, 'src'),
    build: path.resolve(__dirname, 'dist'),
    public: path.resolve(__dirname, 'public'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    assets: path.resolve(__dirname, 'src/assets'),
}

const config = () =>
    buildWebpackConfig({
        paths,
        isDev,
        isProd,
        isEslint,
        isBundleAnalyzer,
        fileName,
        PORT,
    })

export default config
