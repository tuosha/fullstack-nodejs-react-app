import AppContentLayout from './ui/AppContentLayout/AppContentLayout'
import { useEffect, useState } from 'react'
import AppRouterProvider from './providers/RouterProvider'

export const BugButton = () => {
    const [error, setError] = useState(false)
    const onThrow = () => setError(true)
    useEffect(() => {
        if (error) {
            throw new Error()
        }
    }, [error])
    return <button onClick={onThrow}>error btn</button>
}

const App = () => {
    return (
        <>
            <BugButton />
            <AppContentLayout />
        </>
    )
}

export default App
