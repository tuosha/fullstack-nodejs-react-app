import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit'
import { StateScheme } from '../../../app/providers/StoreProvider'

type ActionCreatorType<Returned, ThunkArg, RejectValue> = (
    args: ThunkArg,
) => AsyncThunkAction<Returned, ThunkArg, { rejectValue: RejectValue }>

export class TestAsyncThunk<Returned, ThunkArg, RejectValue> {
    dispatch: Dispatch
    getState: () => StateScheme
    actionCreator: ActionCreatorType<Returned, ThunkArg, RejectValue>

    constructor(actionCreator: ActionCreatorType<Returned, ThunkArg, RejectValue>) {
        this.actionCreator = actionCreator
        this.dispatch = jest.fn()
        this.getState = jest.fn()
    }

    async callThunk(args: ThunkArg) {
        const action = this.actionCreator(args)
        const result = await action(this.dispatch, this.getState, undefined)
        return result
    }
}
