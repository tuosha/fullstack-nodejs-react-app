import type { Meta, StoryObj } from '@storybook/react'
import { withThemeDecorator } from '../../config/storybooks/decorators/withThemeDecorator'
import { MainTheme } from '../../../app/providers/MainThemeProvider'
import PageLoader from './PageLoader'

const meta = {
    title: 'Loaders/PageLoader',
    component: PageLoader,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof PageLoader>

export default meta
type Story = StoryObj<typeof meta>

export const Loader: Story = {
    args: {},
}

export const LoaderDark: Story = {
    args: {},
}
LoaderDark.decorators = [withThemeDecorator(MainTheme.DARK)]
