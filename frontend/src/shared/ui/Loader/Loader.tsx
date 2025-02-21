import { classNames } from '../../helpers/classNames'
import cls from './styles/Loader.module.scss'

interface LoaderProps {
    className?: string
}

const Loader = ({ className }: LoaderProps) => {
    return <div className={classNames(cls.loader, {}, [className])}></div>
}

export default Loader
