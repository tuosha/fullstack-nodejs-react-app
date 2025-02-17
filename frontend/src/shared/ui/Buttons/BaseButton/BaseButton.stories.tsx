import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import BaseButton, { BaseButtonSize, BaseButtonTheme } from './BaseButton'
import { withThemeDecorator } from '../../../config/storybooks/decorators/withThemeDecorator'
import { MainTheme } from '../../../../app/providers/MainThemeProvider'

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

export const OutlineSizeM: Story = {
    args: {
        children: 'TEXT',
        theme: BaseButtonTheme.OUTLINE,
        size: BaseButtonSize.M,
    },
}

export const OutlineSizeL: Story = {
    args: {
        children: 'TEXT',
        theme: BaseButtonTheme.OUTLINE,
        size: BaseButtonSize.L,
    },
}

export const OutlineSizeXL: Story = {
    args: {
        children: 'TEXT',
        theme: BaseButtonTheme.OUTLINE,
        size: BaseButtonSize.XL,
    },
}

export const OutlineSizeDarkXL: Story = {
    args: {
        children: 'DARK',
        theme: BaseButtonTheme.OUTLINE,
        size: BaseButtonSize.XL,
    },
}
OutlineSizeDarkXL.decorators = [withThemeDecorator(MainTheme.DARK)]

export const SquareButtonM: Story = {
    args: {
        children: '>',
        theme: BaseButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: BaseButtonSize.M,
    },
}

export const SquareButtonL: Story = {
    args: {
        children: '>',
        theme: BaseButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: BaseButtonSize.L,
    },
}

export const SquareButtonXL: Story = {
    args: {
        children: '>',
        theme: BaseButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: BaseButtonSize.XL,
    },
}
