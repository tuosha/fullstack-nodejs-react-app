import { configureStore } from '@reduxjs/toolkit'
import { StateScheme } from './StateScheme'
import { counterReducer } from '../../../../entites/Counter'

export function createReduxStore(initState: StateScheme) {
    return configureStore<StateScheme>({
        reducer: { counter: counterReducer },
        devTools: __IS_DEV,
        preloadedState: initState,
    })
}
