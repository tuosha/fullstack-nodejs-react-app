import cls from './AppErrorPage.module.scss'
import { classNames } from '../../../shared/helpers/classNames'
import BaseButton from '../../../shared/ui/Buttons/BaseButton/BaseButton'

interface ErrorPageProps {
    className?: string
}

const AppErrorPage = ({ className }: ErrorPageProps) => {
    return (
        <div className={classNames(cls.appErrorPage, {}, [className])}>
            <h1>Something goes wrong...</h1>
            <BaseButton onClick={() => location.reload()}>Click to reload page</BaseButton>
        </div>
    )
}

export default AppErrorPage
