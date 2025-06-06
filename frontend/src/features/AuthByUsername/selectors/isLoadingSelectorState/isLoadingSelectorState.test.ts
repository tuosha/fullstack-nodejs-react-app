import { StateScheme } from '../../../../app/providers/StoreProvider'
import { isLoadingSelectorState } from './isLoadingSelectorState'

describe('isLoadingSelectorState.test', () => {
    test('should return true', () => {
        const state = {
            authForm: {
                isLoading: true,
            },
        }
        expect(isLoadingSelectorState(state as StateScheme)).toEqual(true)
    })
    test('should return false as empty state', () => {
        const state = {}
        expect(isLoadingSelectorState(state as StateScheme)).toEqual(false)
    })
})
