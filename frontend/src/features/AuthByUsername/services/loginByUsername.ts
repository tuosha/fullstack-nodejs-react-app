import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'
import { UserScheme } from '../../../entites/User'

interface LoginProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<UserScheme, LoginProps, { rejectValue: Error | AxiosError }>(
    'users/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<UserScheme>('http://localhost:8000/login', authData)
            if (!response.data) {
                throw new Error()
            }
            return response.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error)
            }
            return thunkAPI.rejectWithValue(error)
        }
    },
)
