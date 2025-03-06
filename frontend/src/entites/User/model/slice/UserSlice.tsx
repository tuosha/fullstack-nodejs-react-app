import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
