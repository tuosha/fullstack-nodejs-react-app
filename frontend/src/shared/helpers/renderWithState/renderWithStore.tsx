import { ReactNode } from 'react'
import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import i18nForTests from '../../config/i18n/i18nForTests'
import { StoreProvider } from '../../../app/providers/StoreProvider'
import { StateScheme } from '../../../app/providers/StoreProvider'
import { MemoryRouter } from 'react-router-dom'

export interface renderWithStoreOptions {
    initialState?: StateScheme
    initialEntries?: string[]
    basename?: string
}

export function renderWithStore(component: ReactNode, options: renderWithStoreOptions = {}) {
    const { initialState, initialEntries = ['/'], basename = '/' } = options
    return render(
        <StoreProvider initialState={initialState}>
            <I18nextProvider i18n={i18nForTests}>
                <MemoryRouter initialEntries={initialEntries} basename={basename}>
                    {component}
                </MemoryRouter>
            </I18nextProvider>
        </StoreProvider>,
    )
}
