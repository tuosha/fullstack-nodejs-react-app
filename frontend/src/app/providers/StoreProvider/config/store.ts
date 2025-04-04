import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { StateScheme } from './StateScheme'
import { counterReducer } from '../../../../entites/Counter'
import { userReducer } from '../../../../entites/User'
import { authReducer } from '../../../../features/AuthByUsername/slice/authSlice'

export function createReduxStore(initState: StateScheme) {
    const rootReducers: ReducersMapObject<StateScheme> = {
        counter: counterReducer,
        user: userReducer,
        authForm: authReducer,
    }
    return configureStore<StateScheme>({
        reducer: rootReducers,
        devTools: __IS_DEV,
        preloadedState: initState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false,
            }),
    })
}
