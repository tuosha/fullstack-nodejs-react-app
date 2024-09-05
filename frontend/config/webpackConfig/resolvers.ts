import { ResolveOptions } from 'webpack'
import { IBuildOptions } from './types/configTypes'

const resolvers = ({ paths }: IBuildOptions) => {
    const configResolvers: ResolveOptions = {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        alias: {
            '@images': paths.assets + '/images',
        },
    }
    return configResolvers
}

export default resolvers
