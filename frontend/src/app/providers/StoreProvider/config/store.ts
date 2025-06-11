import { Action, configureStore, EnhancedStore, ReducersMapObject, ThunkDispatch } from '@reduxjs/toolkit'
import { StateScheme } from './StateScheme'
import { counterReducer } from '../../../../entites/Counter'
import { userReducer } from '../../../../entites/User'
import { createReducerManager } from '../../../../shared/helpers/createReducerManager/createReducerManager'

interface ExtendedStore extends EnhancedStore<StateScheme> {
    reducerManager: ReturnType<typeof createReducerManager>
}

export function createReduxStore(initState: StateScheme) {
    const rootReducers: ReducersMapObject<StateScheme> = {
        counter: counterReducer,
        user: userReducer,
    }

    const reducerManager = createReducerManager(rootReducers)
    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV,
        preloadedState: initState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false,
            }),
    }) as ExtendedStore

    store.reducerManager = reducerManager

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
export type RootState = ReturnType<typeof createReduxStore>['getState']
export type AppThunkDispatch = ThunkDispatch<RootState, unknown, Action>
