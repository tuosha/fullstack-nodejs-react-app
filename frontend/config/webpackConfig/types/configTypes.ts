export interface IPaths {
    entry: string
    src: string
    build: string
    public: string
    html: string
    assets: string
}

export type TFileName = (ext: string) => string

export interface IBuildOptions {
    paths: IPaths
    isDev: boolean
    isProd: boolean
    isEslint: boolean
    isBundleAnalyzer: boolean
    fileName: TFileName
    PORT: number
}
