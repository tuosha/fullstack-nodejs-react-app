import { classNames } from '../../../shared/helpers/classNames/classNames'
import cls from '../styles/ProfilePage.module.scss'
import DynamicModuleLoader, { ReducersNamesList } from '../../../shared/lib/DynamicModuleLoader/DynamicModuleLoader'
import { profileReducer } from '../../../entites/Profile'

interface ProfilePageProps {
    className?: string
}

const reducers: ReducersNamesList = {
    profile: profileReducer,
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                <h1>HI, Im profile page!</h1>
            </div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
