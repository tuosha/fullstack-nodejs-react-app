import { useDispatch } from 'react-redux'
import { AppThunkDispatch } from '../../../app/providers/StoreProvider'

export const useAppThunkDispatch = () => useDispatch<AppThunkDispatch>()
