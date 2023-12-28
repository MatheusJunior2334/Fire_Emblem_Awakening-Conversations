import React, { useEffect, useState, useRef } from "react";
import styles from './fullScreenButton.module.scss';

export const FullScreenButton: React.FC = () => {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

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
            {!isFullScreen && (
                <button ref={buttonRef} className={styles.fullScreenButtonContent} onClick={handleClick}>
                    {isFullScreen ? 'Sair da Tela Cheia' : 'Entrar na Tela Cheia'}
                </button>
            )}
        </div>
    )
}

