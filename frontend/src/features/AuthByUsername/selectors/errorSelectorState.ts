import { StateScheme } from '../../../app/providers/StoreProvider'

export const errorSelectorState = (state: StateScheme) => state?.authForm?.error || ''
