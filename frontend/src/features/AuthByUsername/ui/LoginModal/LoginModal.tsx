import { classNames } from '../../../../shared/helpers/classNames/classNames'
import cls from './styles/LoginModal.module.scss'
import Modal from '../../../../shared/ui/Modal/Modal'
import { LoginForm } from '../../index'

interface LoginModalProps {
    className?: string
    isOpen?: boolean
    onClose?: () => void
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
    return (
        <Modal className={classNames(cls.loginModal, {}, [className])} isOpen={isOpen} onClose={onClose} lazy>
            <LoginForm />
        </Modal>
    )
}
