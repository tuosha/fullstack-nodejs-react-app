import axios, { AxiosError } from 'axios'
import { loginByUsername } from '../../services/loginByUsername'
import { userActions } from '../../../../entites/User'
import { TestAsyncThunk } from '../../../../shared/lib/TestAsyncThunk/TestAsyncThunk'
import { $api } from '../../../../shared/api/api'

jest.mock('../../../../shared/api/api', () => ({
    $api: {
        post: jest.fn(),
    },
}))

const mockError = new AxiosError('Ошибка', 'ERR_BAD_REQUEST')

describe('authSelectorState.test', () => {
    beforeEach(() => {
        jest.clearAllMocks() // Очистка spy/mocks (post, dispatch, navigate)
    })

    test('on success login', async () => {
        const userValue = { username: 'admin', id: '1' }
        // Spy на mocked $api.post
        const postSpy = jest.spyOn($api, 'post').mockResolvedValue({ data: userValue })
        const asyncThunk = new TestAsyncThunk(loginByUsername)
        const result = await asyncThunk.callThunk({ username: 'admin', password: '123' })
        expect(postSpy).toHaveBeenCalledWith('/login', { username: 'admin', password: '123' })
        expect(asyncThunk.dispatch).toHaveBeenCalledTimes(3) // pending + setAuthData + fulfilled
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(userValue)
        expect(asyncThunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
    })

    test('on error from server', async () => {
        const postSpy = jest.spyOn($api, 'post').mockRejectedValue(mockError)
        const asyncThunk = new TestAsyncThunk(loginByUsername)
        const result = await asyncThunk.callThunk({ username: 'admin', password: '123' })
        expect(asyncThunk.dispatch).toHaveBeenCalledTimes(2) // pending + rejected
        expect(postSpy).toHaveBeenCalledWith('/login', { username: 'admin', password: '123' })
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBeInstanceOf(AxiosError)
    })
})
