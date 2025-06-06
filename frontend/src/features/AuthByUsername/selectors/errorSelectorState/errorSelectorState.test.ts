import { errorSelectorState } from './errorSelectorState'
import { StateScheme } from '../../../../app/providers/StoreProvider'

describe('isLoadingSelectorState.test', () => {
    test('should return error', () => {
        const state = {
            authForm: {
                error: 'error',
            },
        }
        expect(errorSelectorState(state as unknown as StateScheme)).toEqual('error')
    })
    test('should return empty', () => {
        const state = {}
        expect(errorSelectorState(state as StateScheme)).toEqual('')
    })
})
