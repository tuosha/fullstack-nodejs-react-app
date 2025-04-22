import { ReactNode } from 'react'
import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import i18nForTests from '../../config/i18n/i18nForTests'
import { StoreProvider } from '../../../app/providers/StoreProvider'
import { StateScheme } from '../../../app/providers/StoreProvider'

export interface renderWithStoreOptions {
    initialState?: StateScheme
}

export function renderWithStore(component: ReactNode, options: renderWithStoreOptions = {}) {
    const { initialState } = options

    return render(
        <StoreProvider initialState={initialState}>
            <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
        </StoreProvider>,
    )
}
