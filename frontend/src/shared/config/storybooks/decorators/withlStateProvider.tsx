import { StateScheme, StoreProvider } from '../../../../app/providers/StoreProvider'
import { Component } from '@storybook/blocks'

export const withStateProvider = (state: StateScheme) => (Story: Component) => {
    return (
        <StoreProvider initialState={state}>
            <Story />
        </StoreProvider>
    )
}
