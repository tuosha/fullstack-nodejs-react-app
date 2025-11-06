import { classNames } from '../../../shared/helpers/classNames/classNames'
import cls from '../styles/ProfilePage.module.scss'
import DynamicModuleLoader, { ReducersNamesList } from '../../../shared/lib/DynamicModuleLoader/DynamicModuleLoader'
import { fetchProfileData, profileReducer } from '../../../entites/Profile'
import { useEffect } from 'react'
import { useAppDispatch } from '../../../shared/hooks/useAppDispatch/useAppDispatch'
import { useAppThunkDispatch } from '../../../shared/hooks/useAppThunkDispatch/useAppThunkDispatch'

interface ProfilePageProps {
    className?: string
}

const reducers: ReducersNamesList = {
    profile: profileReducer,
}
const ProfilePage = ({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch()
    const thunkDispatch = useAppThunkDispatch()

    useEffect(() => {
        thunkDispatch(fetchProfileData())
    }, [thunkDispatch])
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                <h1>HI, Im profile page!</h1>
            </div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
