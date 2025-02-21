import { classNames } from '../../helpers/classNames'
import cls from './styles/PageLoader.module.scss'
import Loader from '../Loader/Loader'

interface PageLoaderProps {
    className?: string
}

const PageLoader = ({ className }: PageLoaderProps) => {
    return (
        <div className={classNames(cls.pageLoader, {}, [className])}>
            <Loader />
        </div>
    )
}

export default PageLoader
