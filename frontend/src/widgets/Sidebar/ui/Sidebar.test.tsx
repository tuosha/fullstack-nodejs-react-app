import { screen } from '@testing-library/react'
import Sidebar from '../index'
import { renderWithStore } from '../../../shared/helpers/renderWithState/renderWithStore'

describe('sidebar', () => {
    test('sidebar test', () => {
        renderWithStore(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        screen.debug()
    })
})
