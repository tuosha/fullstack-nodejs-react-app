import { StateScheme } from '../../../../app/providers/StoreProvider'

export const isLoadingSelectorState = (state: StateScheme) => state?.authForm?.isLoading || false
