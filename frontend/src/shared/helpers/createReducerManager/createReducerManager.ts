import { Action, combineReducers, ReducersMapObject } from '@reduxjs/toolkit'
import { ReducersManager, StateScheme, StateSchemeKeys } from '../../../app/providers/StoreProvider/config/StateScheme'
import { Reducer } from '@reduxjs/toolkit'

export function createReducerManager(initialReducers: ReducersMapObject<StateScheme>): ReducersManager {
    const reducers = { ...initialReducers }
    let combinedReducer = combineReducers(reducers)
    let keysToRemove: Array<StateSchemeKeys> = []

    return {
        getReducerMap: () => reducers,
        reduce: (state: StateScheme, action: Action) => {
            if (keysToRemove.length > 0) {
                state = { ...state }
                keysToRemove.forEach((key) => {
                    delete state[key]
                })
                keysToRemove = []
            }
            return combinedReducer(state, action)
        },

        add: (key: StateSchemeKeys, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return
            }
            reducers[key] = reducer
            combinedReducer = combineReducers(reducers)
        },

        remove: (key: StateSchemeKeys) => {
            if (!key || !reducers[key]) {
                return
            }
            delete reducers[key]
            keysToRemove.push(key)
            combinedReducer = combineReducers(reducers)
        },
    }
}
