import { classNames } from '../../helpers/classNames'
import cls from './styles/Modal.module.scss'
import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react'

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen: boolean
    onClose: () => void
}

const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose } = props

    const [isClosing, setIsClosing] = useState<boolean>(false)

    const ANIMATION_DELAY = 200

    const timerRef = useRef<ReturnType<typeof setTimeout>>()

    const onCloseHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onCloseHandler()
            }
        },
        [onCloseHandler],
    )

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }
        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    const isContentClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    const mods = {
        [cls.isOpen]: isOpen,
        [cls.isClosing]: isClosing,
    }

    return (
        <div className={classNames(cls.modal, mods, [className])}>
            <div className={cls.overlay} onClick={onCloseHandler}>
                <div className={cls.content} onClick={isContentClick}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal
