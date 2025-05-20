import { classNames } from '../../../../shared/helpers/classNames/classNames'
import cls from './styles/LoginModal.module.scss'
import { ModalProps } from '../../../../shared/ui/Modal/Modal'
import { FC, lazy, Suspense } from 'react'
import { LoginForm } from '../../index'
import Loader from '../../../../shared/ui/Loader/Loader'

interface LoginModalProps extends ModalProps {
    className?: string
}

const ModalAsync = lazy<FC<LoginModalProps>>(() => import('../../../../shared/ui/Modal/Modal'))

const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
    return (
        <Suspense fallback={<Loader />}>
            <ModalAsync className={classNames(cls.loginModal, {}, [className])} isOpen={isOpen} onClose={onClose} lazy>
                <LoginForm />
            </ModalAsync>
        </Suspense>
    )
}

export default LoginModal
