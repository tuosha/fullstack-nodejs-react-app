import { StateScheme } from '../../../app/providers/StoreProvider'

export const userNameSelectorState = (state: StateScheme) => state?.authForm?.username || ''
