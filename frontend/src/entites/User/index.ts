import { UserScheme, UserType } from './model/types/UserType'
import { userReducer, userActions } from './model/slice/userSlice'
import { getUserAuthData } from './model/selectors/getUserAuthData'

export { UserScheme, userActions, userReducer, UserType, getUserAuthData }
