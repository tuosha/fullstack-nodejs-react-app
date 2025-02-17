import '../../../../app/styles/index.scss'
import { Component } from '@storybook/blocks'

export const withGlobalImports = (Story: Component) => (
    <div style={{ margin: '3em' }}>
        <Story />
    </div>
)
