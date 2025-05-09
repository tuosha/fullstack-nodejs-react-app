import { LoginScheme } from '../types/loginScheme'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { loginByUsername } from '../services/loginByUsername'

const initialState: LoginScheme = {
    username: '',
    password: '',
    isLoading: false,
    error: undefined,
}

export const authSlice = createSlice({
    name: 'authSlice',
    initialState: initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(loginByUsername.fulfilled, (state) => {
                state.isLoading = false
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: authActions } = authSlice
export const { reducer: authReducer } = authSlice
