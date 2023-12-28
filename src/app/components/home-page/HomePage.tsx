'use client'

import React, { useEffect, useState } from 'react';
import styles from './HomePage.module.scss';

import { CharactersSelection } from '../characters-selection/CharactersSelection';
import { SelectLanguage } from '../select-language/SelectLanguage';
import { useLanguage, TranslationsType1, TranslationsType2 } from '../../contexts/LanguageContext';
import { useOrientation } from '../screen-orientation/useOrientation';
import { shouldPromptOrientationChange } from '@/app/utils/orientationUtils';
import { ScreenOrientation } from '../screen-orientation/ScreenOrientation';

const buttonTexts: TranslationsType1 = {
    pt: 'Iniciar',
    en: 'Start',
    de: 'Starten'
}

const creditsTexts: TranslationsType2 = {
    pt: {
        text1: 'Desenvolvido por',
        text2: 'Todos os direitos de Fire Emblem são pertencentes a Intelligent Systems e a Nintendo'
    },
    en: {
        text1: 'Developed by',
        text2: 'All rights to Fire Emblem belong to Intelligent Systems and Nintendo'
    },
    de: {
        text1: 'Entwickelt von',
        text2: 'Alle Rechte an Fire Emblem liegen bei Intelligent Systems und Nintendo.'
    }
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

    // Constante para melhorar a exibição da imagem de fundo de acordo com o tamanho da tela do usuário
    if (!isClient) {
        return null
    }
    
    const imageWidth = 2000;
    const imageHeight = 1000;
    const imageAspectRatio = imageWidth / imageHeight;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const screenAspectRatio = screenWidth / screenHeight;

    const backgroundSize = Math.abs(screenAspectRatio - imageAspectRatio) > 0.2 ? 'contain' : 'cover';

   
    const renderHomePage = () => (
        <div>
            <SelectLanguage />
            <main id={styles.homePage} style={{ backgroundSize }}>
                {openGame ? (
                    <CharactersSelection onClose={handlePageReturn} onRestartGame={handlePageReturn} />
                ) : (
                    <div className={styles.homeContent}>
                        <div className={styles.homeLeft}>
                            <button className={styles.startButton} onClick={handleOpenGame}>
                                {buttonTexts[language]}
                            </button>
                        </div>

                        <div className={styles.homeRight}>
                            <div className={styles.credits}>
                                <p>{creditsTexts[language].text1} <span> Matheus Júnior</span></p>
                                <p>{creditsTexts[language].text2}</p>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    )

    return isClient && clientRendered ? (shouldPromptOrientationChange(orientation) ? renderHomePage() : <ScreenOrientation />) : null
}