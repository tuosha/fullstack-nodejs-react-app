import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { StateScheme } from '../config/StateScheme'
import { $api } from '../../../../shared/api/api'
import { useNavigate } from 'react-router-dom'

export interface StoreProviderProps {
    children?: ReactNode
    initialState?: StateScheme
}

const StoreProvider = ({ children, initialState }: StoreProviderProps) => {
    const navigate = useNavigate()
    const store = createReduxStore(initialState, {
        api: $api,
        navigate,
    })
    return <Provider store={store}>{children}</Provider>
}

export default StoreProvider
