'use client'

import React, { useEffect, useState } from 'react';
import styles from './HomePage.module.scss';

import { CharactersSelection } from '../characters-selection/CharactersSelection';
import { SelectLanguage } from '../select-language/SelectLanguage';
import { useLanguage, TranslationsType1 } from '../../contexts/LanguageContext';
import { useOrientation } from '../screen-orientation/useOrientation';
import { shouldPromptOrientationChange } from '@/app/utils/orientationUtils';
import { ScreenOrientation } from '../screen-orientation/ScreenOrientation';

const buttonTexts: TranslationsType1 = {
    pt: 'Iniciar',
    en: 'Start',
    de: 'Starten'
}

export const HomePage: React.FC = () => {
    const { language } = useLanguage();

    const [openGame, setOpenGame] = useState<boolean>(false);
    const isClient = typeof window !== 'undefined';
    const orientation = useOrientation();
  
    const [clientRendered, setClientRendered] = useState<boolean>(false);
  
    useEffect(() => {
      setClientRendered(true);
    }, [])

    // Constante para iniciar o jogo
    const handleOpenGame = () => {
        setOpenGame(true);
    }

    // Constante para voltar para a tela inicial
    const handlePageReturn = () => {
        setOpenGame(false);
    }


    const renderHomePage = () => (
        <div>
            <SelectLanguage />
            <main id={styles.homePage}>
                {openGame ? (
                    <CharactersSelection onClose={handlePageReturn} />
                ) : (

                    <div className={styles.homeContent}>
                        <div className={styles.homeLeft}>
                            <button className={styles.startButton} onClick={handleOpenGame}>
                                {buttonTexts[language]}
                            </button>
                        </div>

                        <div className={styles.homeRight}></div>
                    </div>
                )}
            </main>
        </div>
    )

    return isClient && clientRendered ? (shouldPromptOrientationChange(orientation) ? renderHomePage() : <ScreenOrientation />) : null
}