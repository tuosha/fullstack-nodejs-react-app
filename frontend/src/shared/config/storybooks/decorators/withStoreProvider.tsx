import { StateScheme, StoreProvider } from '../../../../app/providers/StoreProvider'
import { Component } from '@storybook/blocks'

export const withStoreDecorator = (state: StateScheme) => (Story: Component) => (
    <StoreProvider initialState={state}>
        <Story />
    </StoreProvider>
)
