import { screen } from '@testing-library/react'
import { renderWithStore } from '../../../shared/helpers/renderWithState/renderWithStore'
import { Counter } from './Counter'
import userEvent from '@testing-library/user-event'

describe('Counter test', () => {
    test('test render', () => {
        renderWithStore(<Counter />, {
            initialState: { counter: { value: 10 } },
        })
        expect(screen.getByTestId('counter-value')).toHaveTextContent('10')
    })

    test('increment', async () => {
        const user = userEvent.setup()
        renderWithStore(<Counter />, {
            initialState: { counter: { value: 10 } },
        })
        await user.click(screen.getByTestId('increment-btn'))
        expect(screen.getByTestId('counter-value')).toHaveTextContent('11')
    })

    test('decrement', async () => {
        const user = userEvent.setup()
        renderWithStore(<Counter />, {
            initialState: { counter: { value: 10 } },
        })
        await user.click(screen.getByTestId('decrement-btn'))
        expect(screen.getByTestId('counter-value')).toHaveTextContent('9')
    })
})
