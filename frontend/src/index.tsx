import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import AppRouterProvider from './app/providers/RouterProvider'

const root = ReactDOM.createRoot(document.getElementById('app'))

root.render(
    <StrictMode>
        <AppRouterProvider />
    </StrictMode>,
)
