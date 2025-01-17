import { render, screen } from '@testing-library/react'
import BaseButton, { BaseButtonTheme } from './BaseButton'

describe('buttons', () => {
    test('btn exists test', () => {
        render(<BaseButton>Test</BaseButton>)
        expect(screen.getByText('Test')).toBeInTheDocument()
    })
    test('btn has class test', () => {
        render(<BaseButton className={BaseButtonTheme.CLEAR}>Test</BaseButton>)
        expect(screen.getByText('Test')).toHaveClass('clear')
        screen.debug()
    })
})
