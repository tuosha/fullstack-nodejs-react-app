import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import AppRouterProvider from './app/providers/RouterProvider'
import './shared/config/i18n/i18n.config'
import ErrorBoundary from './app/providers/ErrorBoundary'
import App from './app/App'

const root = ReactDOM.createRoot(document.getElementById('app'))

root.render(
    <StrictMode>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </StrictMode>,
)
