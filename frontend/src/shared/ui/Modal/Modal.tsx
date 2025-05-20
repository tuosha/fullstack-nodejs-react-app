import { classNames } from '../../helpers/classNames/classNames'
import cls from './styles/Modal.module.scss'
import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import Portal from '../Portal/Portal'
import { useTheme } from '../../../app/providers/MainThemeProvider'

export interface ModalProps {
    children?: ReactNode
    className?: string
    isOpen?: boolean
    onClose?: () => void
    lazy?: boolean
}

const Modal = (props: ModalProps) => {
    const { children, isOpen, onClose, lazy } = props
    const { theme } = useTheme()
    const [isClosing, setIsClosing] = useState<boolean>(false)
    const [isMounted, setIsMounted] = useState(false)
    const ANIMATION_DELAY = 200

    const timerRef = useRef<ReturnType<typeof setTimeout>>()

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true)
        }
    }, [isOpen])

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
    if (lazy && !isMounted) {
        return null
    }
    return (
        <Portal>
            <div className={classNames(cls.modal, mods, [theme])}>
                <div className={cls.overlay} onClick={onCloseHandler}>
                    <div className={cls.content} onClick={isContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}

export default Modal
