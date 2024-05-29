import React, { useEffect, useState, useRef } from "react";
import styles from '../../styles/fullscreenButton.module.scss'

import { EnterFullscreenIcon } from "../../../../public/assets/icons/EnterFullscreenIcon";
import { ExitFullscreenIcon } from "../../../../public/assets/icons/ExitFullscreenIcon";
import { useLanguage, TranslationsType1 } from "../../../app/contexts/languageContextProvider";

const fullScreenTitleText: TranslationsType1 = {
    pt: 'Tela cheia',
    en: 'Full screen',
    de: 'Vollbild'
}

export const FullScreenButton: React.FC = () => {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const { language } = useLanguage();

    useEffect(() => {
        const handleFullScreenChange = () => {
            setIsFullScreen(document.fullscreenElement !== null);
        };

        document.addEventListener('fullscreenchange', handleFullScreenChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullScreenChange);
        }
    }, [])

    const enterFullscreen = () => {
        const element = document.documentElement;

        if (element.requestFullscreen) {
            element.requestFullscreen();
        }
    };

    const exitFullScreen = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    };

    const handleClick = () => {
        if (isFullScreen) {
            exitFullScreen();
        } else {
            enterFullscreen();
        }
    }

    return (
        <div id={styles.fullScreenButton}>
            
            <button ref={buttonRef} className={styles.fullScreenButtonContent} onClick={handleClick} title={fullScreenTitleText[language]}>
                {isFullScreen ? <ExitFullscreenIcon /> : <EnterFullscreenIcon />}
            </button>
            
        </div>
    )
}