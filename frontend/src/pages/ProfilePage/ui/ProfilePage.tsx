import { classNames } from '../../../shared/helpers/classNames/classNames'
import cls from '../styles/ProfilePage.module.scss'

interface ProfilePageProps {
    className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    return (
        <div className={classNames(cls.ProfilePage, {}, [className])}>
            <h1>HI, Im profile page!</h1>
        </div>
    )
}

export default ProfilePage
