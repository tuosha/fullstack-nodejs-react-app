import axios, { AxiosError } from 'axios'
import { loginByUsername } from '../../services/loginByUsername'
import { userActions } from '../../../../entites/User'
import { TestAsyncThunk } from '../../../../shared/lib/TestAsyncThunk/TestAsyncThunk'

jest.mock('axios')

const axiosMocked = axios as jest.Mocked<typeof axios>
const mockError = new AxiosError('Ошибка', 'ERR_BAD_REQUEST')

describe('authSelectorState.test', () => {
    test('on success login', async () => {
        const userValue = { username: 'admin', id: '1' }
        axiosMocked.post.mockResolvedValue(Promise.resolve({ data: userValue }))
        const asyncThunk = new TestAsyncThunk(loginByUsername)
        const result = await asyncThunk.callThunk({ username: 'admin', password: '123' })
        expect(axiosMocked.post).toHaveBeenCalled()
        expect(asyncThunk.dispatch).toHaveBeenCalledTimes(3)
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual({ username: 'admin', id: '1' })
        expect(asyncThunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
        expect(result.payload).toEqual(userValue)
    })
    test('on error from server', async () => {
        axiosMocked.post.mockRejectedValue(mockError)
        const asyncThunk = new TestAsyncThunk(loginByUsername)
        const result = await asyncThunk.callThunk({ username: 'admin', password: '123' })
        expect(asyncThunk.dispatch).toHaveBeenCalledTimes(2)
        expect(axiosMocked.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBeInstanceOf(AxiosError)
    })
})
