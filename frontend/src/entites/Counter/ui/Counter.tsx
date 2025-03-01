import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../model/slice/CounterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'

export const Counter = () => {
    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)
    const increment = () => {
        dispatch(counterActions.increment())
    }
    const decrement = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <div>
            <h3 data-testid='counter-value'>{counterValue}</h3>
            <button data-testid='increment-btn' onClick={increment}>
                +
            </button>
            <button data-testid='decrement-btn' onClick={decrement}>
                -
            </button>
        </div>
    )
}
