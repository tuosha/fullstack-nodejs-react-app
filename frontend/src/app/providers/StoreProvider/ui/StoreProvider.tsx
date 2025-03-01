import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { StateScheme } from '../config/StateScheme'

export interface StoreProviderProps {
    children?: ReactNode
    initialState?: StateScheme
}

const StoreProvider = ({ children, initialState }: StoreProviderProps) => {
    const store = createReduxStore(initialState)
    return <Provider store={store}>{children}</Provider>
}

export default StoreProvider
