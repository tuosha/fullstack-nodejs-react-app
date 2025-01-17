import { render, screen } from '@testing-library/react'
import Sidebar from '../index'

describe('sidebar', () => {
    test('sidebar test', () => {
        render(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        screen.debug()
    })
})
