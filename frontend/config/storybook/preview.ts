import type { Preview } from '@storybook/react'
import { withGlobalImports } from '../../src/shared/config/storybooks/decorators/withGlobalmports'
import 'loki/configure-react.js'

const preview: Preview = {
    decorators: [withGlobalImports],
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
}

export default preview
