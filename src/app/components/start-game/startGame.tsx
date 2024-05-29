import React, { useEffect, useState } from 'react';
import styles from '../../styles/startGame.module.scss';

import { CharactersSelection } from '../characters-selection/charactersSelection';
import { SelectLanguage } from '../select-language/selectLanguage';
import { useLanguage, TranslationsType1, TranslationsType2 } from '@/app/contexts/languageContext';
import { useOrientation } from '../../hooks/useOrientation';
import { shouldPromptOrientationChange } from '@/app/utils/orientationUtils';
import { ScreenOrientation } from '../screen-orientation/screenOrientation';
import { FullScreenButton } from '../UI/fullscreenButton';

import { PortugueseLanguageIcon } from '../../../../public/assets/icons/PortugueseLanguageIcon';
import { EnglishLanguageIcon } from '../../../../public/assets/icons/EnglishLanguageIcon';
import { GermanLanguageIcon } from '../../../../public/assets/icons/GermanLanguageIcon';

const buttonTexts: TranslationsType1 = {
    pt: 'Iniciar',
    en: 'Start',
    de: 'Starten'
}

const changeLanguageTitleText: TranslationsType1 = {
    pt: 'Mudar idioma',
    en: 'Change language',
    de: 'Sprache ändern'
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

export const StartGame: React.FC = () => {
    const { language, handleChangeLanguage } = useLanguage();

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
            <FullScreenButton />
            <SelectLanguage />
            <main id={styles.startGame} style={{ backgroundSize }}>
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
                            <button className={styles.languageIcon} onClick={handleChangeLanguage} title={changeLanguageTitleText[language]}>
                                {language === 'pt' && <PortugueseLanguageIcon />}
                                {language === 'en' && <EnglishLanguageIcon />}
                                {language === 'de' && <GermanLanguageIcon />}
                            </button>

                            <div className={styles.credits}>
                                <p>{creditsTexts[language].text1} <a href='https://www.linkedin.com/in/matheus-j%C3%BAnior/' target='_blank' rel='noopener noreferrer'> Matheus Júnior</a></p>
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