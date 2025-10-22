import { createSlice } from '@reduxjs/toolkit'
import { ProfileScheme } from '../types/ProfileTypes'

const initialState: ProfileScheme = {
    data: undefined,
    isLoading: true,
    error: undefined,
    readonly: true,
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
