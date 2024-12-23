import { FC, useState } from 'react'
import cls from './Dropdown.module.scss'

const Dropdown: FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState<string | null>(null)
    const options = ['Пункт 1', 'Пункт 2', 'Пункт 3']
    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    const handleOptionClick = (option: string) => {
        setSelectedOption(option)
        setIsOpen(false)
    }
    return (
        <div className={cls.dropdown}>
            <div onClick={toggleDropdown} className={cls.dropdownToggle}>
                {selectedOption || 'Выберите пункт'}
            </div>
            {isOpen && (
                <ul className={cls.dropdownMenu}>
                    {options.map((option) => (
                        <li key={option} onClick={() => handleOptionClick(option)} className={cls.dropdownItem}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Dropdown
