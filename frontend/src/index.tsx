import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import AppRouterProvider from './app/providers/RouterProvider'
import './shared/config/i18n/i18n.config'
import { MainThemeProvider } from './app/providers/MainThemeProvider'
import { StoreProvider } from './app/providers/StoreProvider'

const root = ReactDOM.createRoot(document.getElementById('app'))

root.render(
    <StrictMode>
        <StoreProvider>
            <MainThemeProvider>
                <AppRouterProvider />
            </MainThemeProvider>
        </StoreProvider>
    </StrictMode>,
)
