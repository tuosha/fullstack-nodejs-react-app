import { CounterScheme } from '../../../../entites/Counter'
import { UserScheme } from '../../../../entites/User'
import { LoginScheme } from '../../../../features/AuthByUsername'

export interface StateScheme {
    counter?: CounterScheme
    user?: UserScheme
    authForm?: LoginScheme
}
