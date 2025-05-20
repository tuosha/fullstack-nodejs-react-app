import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { StateScheme } from './StateScheme'
import { counterReducer } from '../../../../entites/Counter'
import { userReducer } from '../../../../entites/User'
import { createReducerManager } from '../../../../shared/helpers/createReducerManager/createReducerManager'

export function createReduxStore(initState: StateScheme) {
    const rootReducers: ReducersMapObject<StateScheme> = {
        counter: counterReducer,
        user: userReducer,
    }

    const reducerManager = createReducerManager(rootReducers)
    const store = configureStore<StateScheme>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV,
        preloadedState: initState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false,
            }),
    })
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}
