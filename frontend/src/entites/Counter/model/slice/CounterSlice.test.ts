import { counterActions, counterReducer } from './CounterSlice'
import { CounterScheme } from '../types/CounterScheme'

describe('CounterSlice.test', () => {
    test('counter slice decrement test', () => {
        const state: CounterScheme = { value: 7 }
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 6 })
    })
    test('counter slice increment test', () => {
        const state: CounterScheme = { value: 7 }
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 8 })
    })
    test('counter slice empty state test', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 })
    })
})
