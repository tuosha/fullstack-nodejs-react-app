import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'
import { userActions } from '../../../entites/User'
import { USER_LOCAL_STORAGE_KEY } from '../../../shared/constants/localstorage'
import { UserType } from '../../../entites/User'
import { Extra } from '../../../app/providers/StoreProvider/config/store'

interface LoginProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<
    UserType,
    LoginProps,
    {
        rejectValue: Error | AxiosError
        extra: Extra
    }
>('users/loginByUsername', async (authData, { extra, dispatch, rejectWithValue }) => {
    try {
        const response = await extra.api.post('/login', authData)
        if (!response.data) {
            throw new Error()
        }
        localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data))
        dispatch(userActions.setAuthData(response.data))
        extra.navigate('/profile-page')
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log(error)
        }
        return rejectWithValue(error)
    }
})
