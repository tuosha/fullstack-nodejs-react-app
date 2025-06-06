import { StateScheme } from '../../../../app/providers/StoreProvider'
import { userNameSelectorState } from './userNameSelectorState'

describe('userNameSelectorState.test', () => {
    test('should return true', () => {
        const state = {
            authForm: {
                username: 'toha',
            },
        }
        expect(userNameSelectorState(state as StateScheme)).toEqual('toha')
    })
    test('should return false as empty state', () => {
        const state = {}
        expect(userNameSelectorState(state as StateScheme)).toEqual('')
    })
})
