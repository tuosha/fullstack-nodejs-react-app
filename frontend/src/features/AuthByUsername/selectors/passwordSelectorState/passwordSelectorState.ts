import { StateScheme } from '../../../../app/providers/StoreProvider'

export const passwordSelectorState = (state: StateScheme) => state?.authForm?.password || ''
