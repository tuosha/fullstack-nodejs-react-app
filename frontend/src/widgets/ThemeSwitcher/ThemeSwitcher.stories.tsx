import type { Meta, StoryObj } from '@storybook/react'
import ThemeSwitcher from './ThemeSwitcher'
import { withThemeDecorator } from '../../shared/config/storybooks/decorators/withThemeDecorator'
import { MainTheme } from '../../app/providers/MainThemeProvider'

const meta = {
    title: 'Widgets/ThemeSwitcher',
    component: ThemeSwitcher,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ThemeSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}

export const Dark: Story = {
    args: {},
}
Dark.decorators = [withThemeDecorator(MainTheme.DARK)]
