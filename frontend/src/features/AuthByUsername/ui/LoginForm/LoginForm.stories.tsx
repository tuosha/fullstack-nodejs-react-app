import type { Meta, StoryObj } from '@storybook/react'
import { withThemeDecorator } from '../../../../shared/config/storybooks/decorators/withThemeDecorator'
import { MainTheme } from '../../../../app/providers/MainThemeProvider'
import { LoginForm } from './LoginForm'
import { withStateProvider } from '../../../../shared/config/storybooks/decorators/withlStateProvider'

const meta = {
    title: 'Features/LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof LoginForm>

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

export const FilledForm: Story = {
    args: {},
}
FilledForm.decorators = [
    withThemeDecorator(MainTheme.LIGHT),
    withStateProvider({
        authForm: { username: 'admin', password: '123', isLoading: false },
    }),
]
