import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import BaseButton, { BaseButtonTheme } from './BaseButton'

const meta = {
    title: 'Base Button',
    component: BaseButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof BaseButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        primary: true,
        children: 'Primary Button',
    },
}

export const Clear: Story = {
    args: {
        children: 'Clear Button',
        theme: BaseButtonTheme.CLEAR,
    },
}

export const Outline: Story = {
    args: {
        children: 'Outline Button',
        theme: BaseButtonTheme.OUTLINE,
    },
}
