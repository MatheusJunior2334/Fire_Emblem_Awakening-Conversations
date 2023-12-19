import React, { useState } from 'react';
import styles from './SelectLanguage.module.scss';

import { PortugueseLanguageIcon } from '../../../../public/assets/icons/PortugueseLanguageIcon';
import { EnglishLanguageIcon } from '../../../../public/assets/icons/EnglishLanguageIcon';
import { GermanLanguageIcon } from '../../../../public/assets/icons/GermanLanguageIcon';

import { useLanguage, TranslationsType1 } from '../../contexts/LanguageContext';

interface LanguageButtonProps {
    languageCode: string;
    languageCountry: string;
}

const LanguageButton: React.FC<LanguageButtonProps> = ({ languageCode, languageCountry }) => {
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
            <p>{languageCode + '-' + languageCountry}</p>
        </button>
    )
}

export const SelectLanguage: React.FC = () => {
    const { language, islanguageConfirmed } = useLanguage();

    const translations: TranslationsType1 = {
        pt: 'Selecionar idioma',
        en: 'Select language',
        de: 'Sprache auswählen'
    }

    if (islanguageConfirmed) {
        return null;
    }

    return (
        <div id={styles.selectLanguage}>
            <div className={styles.languagesContainer}>
                <h2>{translations[language]}</h2>

                <div className={styles.languagesContent} >
                    <LanguageButton languageCode='pt' languageCountry='BR' />
                    <LanguageButton languageCode='en' languageCountry='UK' />
                    <LanguageButton languageCode='de' languageCountry='DE' />
                </div>

            </div>
        </div>
    )
}