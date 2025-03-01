import { getCounterValue } from './getCounterValue'
import { StateScheme } from '../../../../../app/providers/StoreProvider/config/StateScheme'

describe('getCounterValue.test', () => {
    test('return counter value', () => {
        const state = {
            counter: { value: 5 },
        }
        expect(getCounterValue(state as StateScheme)).toEqual(5)
    })
})
