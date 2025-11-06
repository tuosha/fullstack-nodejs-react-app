import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'
import { Extra } from '../../../../app/providers/StoreProvider/config/store'
import { Profile } from '../types/ProfileTypes'

export const fetchProfileData = createAsyncThunk<
    Profile,
    void,
    {
        rejectValue: Error | AxiosError
        extra: Extra
    }
>('profile/fetchProfileData', async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI
    try {
        const response = await extra.api.get<Profile>('/profile')
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log(error)
        }
        return rejectWithValue(error)
    }
})
