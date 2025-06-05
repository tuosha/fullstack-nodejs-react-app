import { FC, ReactNode, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'
import { StateSchemeKeys, StoreWithReducerManager } from '../../../app/providers/StoreProvider/config/StateScheme'
import { Reducer } from '@reduxjs/toolkit'

export type ReducersNamesList = {
    [reducerKey in StateSchemeKeys]?: Reducer
}

type ReducersListEntry = [StateSchemeKeys, Reducer]

interface DynamicModuleLoaderProps {
    children: ReactNode
    reducers: ReducersNamesList
    removeAfterUnmount?: boolean
}

const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const { children, reducers, removeAfterUnmount } = props
    const dispatch = useDispatch()
    const store = useStore() as StoreWithReducerManager
    useEffect(() => {
        Object.entries(reducers).forEach(([reducerKey, reducer]: ReducersListEntry) => {
            store.reducerManager.add(reducerKey, reducer)
            dispatch({ type: `INIT ${reducerKey} reducer` })
        })
        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([reducerKey]: ReducersListEntry) => {
                    store.reducerManager.remove(reducerKey)
                    dispatch({ type: `DESTROY ${reducerKey} reducer` })
                })
            }
        }
    }, [])

    return <>{children}</>
}

export default DynamicModuleLoader
