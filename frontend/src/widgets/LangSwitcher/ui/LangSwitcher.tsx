import { classNames } from '../../../shared/helpers/classNames'
import cls from '../styles/LangSwitcher.module.scss'
import BaseButton, { BaseButtonTheme } from '../../../shared/ui/Buttons/BaseButton/BaseButton'
import { useTranslation } from 'react-i18next'
import RuLang from '../../../shared/assets/icons/translation/ru-language-icon.svg'
import EngLang from '../../../shared/assets/icons/translation/en-language-icon.svg'

interface LangSwitcherProps {
    className?: string
}

const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { i18n } = useTranslation()
    const lang = i18n.language === 'eng' ? 'ru' : 'eng'
    const toggleLang = () => {
        i18n.changeLanguage(lang)
    }
    return (
        <BaseButton
            className={classNames(cls.langSwitcherBtn, {}, [className])}
            theme={BaseButtonTheme.CLEAR}
            onClick={toggleLang}
        >
            {lang === 'ru' ? <RuLang /> : <EngLang />}
        </BaseButton>
    )
}

export default LangSwitcher
