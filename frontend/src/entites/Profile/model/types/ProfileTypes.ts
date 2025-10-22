export interface ProfileTypes {
    firstName: string
    lastName: string
    age: number
    country: string
    city: string
    username: string
    avatar: string
}
export interface ProfileScheme {
    data?: undefined
    isLoading: boolean
    error?: string
    readonly: boolean
}
