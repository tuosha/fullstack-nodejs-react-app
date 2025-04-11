import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'
import { userActions } from '../../../entites/User'
import { USER_LOCAL_STORAGE_KEY } from '../../../shared/constants/localstorage'
import { UserType } from '../../../entites/User'

interface LoginProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<UserType, LoginProps, { rejectValue: Error | AxiosError }>(
    'users/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<UserType>('http://localhost:8000/login', authData)
            if (!response.data) {
                throw new Error()
            }
            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data))
            thunkAPI.dispatch(userActions.setAuthData(response.data))
            return response.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error)
            }
            return thunkAPI.rejectWithValue(error)
        }
    },
)
