import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit'
import { StateScheme } from '../../../app/providers/StoreProvider'
import { Extra } from '../../../app/providers/StoreProvider/config/store'
import { $api } from '../../api/api'
import { NavigateFunction } from 'react-router-dom'

type ActionCreatorType<Returned, ThunkArg, RejectValue> = (
    args: ThunkArg,
) => AsyncThunkAction<Returned, ThunkArg, { rejectValue: RejectValue }>

export class TestAsyncThunk<Returned, ThunkArg, RejectValue> {
    dispatch: Dispatch
    getState: () => StateScheme
    actionCreator: ActionCreatorType<Returned, ThunkArg, RejectValue>
    extra: Extra

    constructor(actionCreator: ActionCreatorType<Returned, ThunkArg, RejectValue>) {
        this.actionCreator = actionCreator
        this.dispatch = jest.fn()
        this.getState = jest.fn()
        this.extra = {
            api: $api, // Подхватит spy из теста
            navigate: jest.fn() as NavigateFunction,
        }
    }

    async callThunk(args: ThunkArg) {
        const action = this.actionCreator(args)
        const thunkAPI = {
            extra: this.extra,
        }
        const result = await action(this.dispatch, this.getState, thunkAPI.extra)
        return result
    }
}
