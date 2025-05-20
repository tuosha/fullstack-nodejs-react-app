import { CounterScheme } from '../../../../entites/Counter'
import { UserScheme } from '../../../../entites/User'
import { LoginScheme } from '../../../../features/AuthByUsername'
import { Action, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'

export interface StateScheme {
    counter?: CounterScheme
    user?: UserScheme
    authForm?: LoginScheme
}

export type StateSchemeKeys = keyof StateScheme

export interface ReducersManager {
    getReducerMap: () => ReducersMapObject<StateScheme>
    reduce: (state: StateScheme, action: Action) => StateScheme
    add: <T extends keyof StateScheme>(key: T, reducer: Reducer<StateScheme[T], Action>) => void
    remove: (key: StateSchemeKeys) => void
}

export interface StoreWithReducerManager extends EnhancedStore<StateScheme> {
    reducerManager: ReducersManager
}
