import React from 'react';
import styles from '../../styles/selectLanguage.module.scss';

import { PortugueseLanguageIcon } from '../../../../public/assets/icons/PortugueseLanguageIcon';
import { EnglishLanguageIcon } from '../../../../public/assets/icons/EnglishLanguageIcon';
import { GermanLanguageIcon } from '../../../../public/assets/icons/GermanLanguageIcon';

import { useLanguage, TranslationsType1 } from '../../contexts/languageContextProvider';

interface LanguageButtonProps {
    languageCode: string;
    selectedLanguage: string;
}

const LanguageButton: React.FC<LanguageButtonProps> = ({ languageCode, selectedLanguage }) => {
    const { changeLanguage, confirmLanguage, language } = useLanguage();

    const handleClick = () => {
        changeLanguage(languageCode);
        confirmLanguage();
    }

    const handleMouseHover = () => {
        changeLanguage(languageCode)
    }

    return (
        <button onClick={handleClick} onMouseOver={handleMouseHover} className={`${styles.languagesIcon} ${language === languageCode && languageCode ? styles.selected : ''}`}>
            {languageCode === 'pt' && <PortugueseLanguageIcon />}
            {languageCode === 'en' && <EnglishLanguageIcon />}
            {languageCode === 'de' && <GermanLanguageIcon />}
            {selectedLanguage}
        </button>
    )
}

export const SelectLanguage: React.FC = () => {
    const { language, isLanguageConfirmed } = useLanguage();

    const translations: TranslationsType1 = {
        pt: 'Selecionar idioma',
        en: 'Select language',
        de: 'Sprache auswählen'
    }

    if (isLanguageConfirmed) {
        return null;
    }

    return (
        <div id={styles.selectLanguage}>
            <div className={styles.languagesContainer}>
                <h2>{translations[language]}</h2>

                <div className={styles.languagesContent} >
                    <LanguageButton languageCode='pt' selectedLanguage='Português' />
                    <LanguageButton languageCode='en' selectedLanguage='English' />
                    <LanguageButton languageCode='de' selectedLanguage='Deutsch' />
                </div>

            </div>
        </div>
    )
}