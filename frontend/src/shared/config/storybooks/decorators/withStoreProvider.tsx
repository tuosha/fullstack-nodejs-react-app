import { StoreProvider } from '../../../../app/providers/StoreProvider'
import { Component } from '@storybook/blocks'

export const withStoreProvider = (Story: Component) => (
    <StoreProvider>
        <Story />
    </StoreProvider>
)
