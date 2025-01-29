import type { Meta, StoryObj } from '@storybook/react'
import Sidebar from './Sidebar'

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

export const Primary: Story = {
    args: {},
}
