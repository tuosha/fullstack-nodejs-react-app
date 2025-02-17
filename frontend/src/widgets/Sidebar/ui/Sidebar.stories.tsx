import type { Meta, StoryObj } from '@storybook/react'
import Sidebar from './Sidebar'
import { withThemeDecorator } from '../../../shared/config/storybooks/decorators/withThemeDecorator'
import { MainTheme } from '../../../app/providers/MainThemeProvider'

const meta = {
    title: 'Widgets/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}
Light.decorators = [withThemeDecorator(MainTheme.LIGHT)]

export const Dark: Story = {
    args: {},
}
Dark.decorators = [withThemeDecorator(MainTheme.DARK)]
