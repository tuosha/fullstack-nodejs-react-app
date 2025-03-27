import { CounterScheme } from '../../../../entites/Counter'
import { UserScheme } from '../../../../entites/User'

export interface StateScheme {
    counter?: CounterScheme
    user?: UserScheme
}
