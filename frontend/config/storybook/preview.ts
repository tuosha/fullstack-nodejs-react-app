import type { Preview } from '@storybook/react'
import { withGlobalImports } from '../../src/shared/config/storybooks/decorators/withGlobalmports'
import { withThemeDecorator } from '../../src/shared/config/storybooks/decorators/withThemeDecorator'
import { MainTheme } from '../../src/app/providers/MainThemeProvider'

const preview: Preview = {
    decorators: [withGlobalImports, withThemeDecorator(MainTheme.LIGHT)],
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
