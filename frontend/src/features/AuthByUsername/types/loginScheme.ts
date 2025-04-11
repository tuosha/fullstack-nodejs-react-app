import { AxiosError } from 'axios'

export interface LoginScheme {
    username: string
    password: string
    isLoading: boolean
    error?: Error | AxiosError
}
