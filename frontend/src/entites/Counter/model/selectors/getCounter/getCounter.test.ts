import { getCounter } from './getCounter'
import { StateScheme } from '../../../../../app/providers/StoreProvider/config/StateScheme'

describe('getCounter.test', () => {
    test('return counter', () => {
        const state = {
            counter: { value: 5 },
        }
        expect(getCounter(state as StateScheme)).toEqual({ value: 5 })
    })
})
