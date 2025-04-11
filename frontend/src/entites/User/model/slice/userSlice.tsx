import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserScheme, UserType } from '../types/UserType'
import { USER_LOCAL_STORAGE_KEY } from '../../../../shared/constants/localstorage'

const initialState: UserScheme = {}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<UserType>) => {
            state.authData = action.payload
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY)
            if (user) {
                state.authData = JSON.parse(user)
            }
        },
        logoutAuth: (state) => {
            state.authData = undefined
            localStorage.removeItem(USER_LOCAL_STORAGE_KEY)
        },
    },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
