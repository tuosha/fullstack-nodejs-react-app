import { fileURLToPath } from 'url';
import { dirname } from 'path';

const fileName = (ext: string) => isDev ? `[name].${ext}` : `[name].[fullhash].${ext}`
const metaUrl: string = import.meta.url
const isDev: boolean = process.env.NODE_ENV === 'development';
const isProd: boolean = !isDev
const isBundleAnalyzer: boolean = process.env.NODE_ENV === 'bundle_analyzer'
const isEslintErrors: boolean = process.env.NODE_ENV === 'eslint_errors'
const __filename: string = fileURLToPath(metaUrl);
const __dirname: string = dirname(__filename);

export {
    fileName,
    isDev,
    isProd,
    isBundleAnalyzer,
    isEslintErrors,
    __filename,
    __dirname
}