import type { Meta, StoryObj } from '@storybook/react'

import { MainTheme } from '../../../app/providers/MainThemeProvider'
import Text, { TextTheme } from './Text'
import { withThemeDecorator } from '../../config/storybooks/decorators/withThemeDecorator'

const meta = {
    title: 'UI/Text',
    component: Text,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const NormalTextLight: Story = {
    args: {
        title: 'Text Title',
        text: 'Light Theme Text Light Theme Text Light Theme Text',
        theme: TextTheme.NORMAL,
    },
}

export const NormalTextDark: Story = {
    args: {
        title: 'Text Title',
        text: 'Dark Theme Text Dark Theme Text Dark Theme Text',
        theme: TextTheme.NORMAL,
    },
}

NormalTextDark.decorators = [withThemeDecorator(MainTheme.DARK)]

export const ErrorText: Story = {
    args: {
        title: 'Title Error Text',
        text: 'Error Text Error Text Error Text Error Text',
        theme: TextTheme.ERROR,
    },
}
