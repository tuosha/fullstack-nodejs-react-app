import { StateScheme } from '../../../../app/providers/StoreProvider'
import { passwordSelectorState } from './passwordSelectorState'

describe('passwordSelectorState.test', () => {
    test('should return true', () => {
        const state = {
            authForm: {
                password: '1234',
            },
        }
        expect(passwordSelectorState(state as StateScheme)).toEqual('1234')
    })
    test('should return false as empty state', () => {
        const state = {}
        expect(passwordSelectorState(state as StateScheme)).toEqual('')
    })
})
