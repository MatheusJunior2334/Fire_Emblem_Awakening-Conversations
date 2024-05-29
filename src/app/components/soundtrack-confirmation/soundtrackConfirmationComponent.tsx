import React from "react";
import Image from "next/image";
import styles from '../../styles/soundtrackConfirmation.module.scss';
import { TranslationsType1, TranslationsType2, useLanguage } from "@/app/contexts/languageContextProvider";

import { AudioOnIcon } from "../../../../public/assets/icons/AudioOnIcon";
import { AudioOffIcon } from "../../../../public/assets/icons/AudioOffIcon";

import { MusicOnIcon } from "../../../../public/assets/icons/MusicOnIcon";
import { MusicOffIcon } from "../../../../public/assets/icons/MusicOffIcon";

interface SoundtrackProps {
    backgroundMusic: () => void;
    isBackgroundMusic: boolean;
    audioPlayer: () => void;
    isAudioPlayer: boolean;
    confirmChoices: () => void;
    selectedCharacters: string[];
}

const permissionText: TranslationsType1 = {
    pt: "Permissões",
    en: "Permissions",
    de: "Berechtigungen"
}

const audioTexts: TranslationsType2 = {
    pt: {
        text1: "Vozes dos personagens",
        text2: "Música de fundo"
    },
    en: {
        text1: "Character voices",
        text2: "Background music",
    },
    de: {
        text1: "Charakterstimmen",
        text2: "Hintergrundmusik"
    }
}

const confirmText: TranslationsType1 = {
    pt: "Confirmar escolhas",
    en: "Confirm choices",
    de: "Auswahl bestätigen"
}

export const SoundtrackConfirmation: React.FC<SoundtrackProps> = ({ backgroundMusic, isBackgroundMusic, audioPlayer, isAudioPlayer, confirmChoices, selectedCharacters }) => {
    const { language } = useLanguage();

    return (
        <div id={styles.soundtrackConfirmation}>
            <div className={styles.soundtrackContent}>

                <h2>{permissionText[language]}</h2>

                {/* Botões para permitir áudio das vozes dos personagens e canção de fundo */}
                <div className={styles.buttons}>
                    <button className={isAudioPlayer ? styles.allow : styles.donotAllow} onClick={audioPlayer}>
                        {isAudioPlayer ? <AudioOnIcon /> : <AudioOffIcon />}
                        {audioTexts[language].text1}
                    </button>

                    <button className={isBackgroundMusic ? styles.allow : styles.donotAllow} onClick={backgroundMusic}>
                        {isBackgroundMusic ? <MusicOnIcon /> : <MusicOffIcon />}
                        {audioTexts[language].text2}
                    </button>
                </div>
                
                <button className={styles.confirmButton} onClick={confirmChoices}>
                    {confirmText[language]}
                </button>

                <div className={styles.charactersGifs}>
                    {selectedCharacters.map((character) => (
                        <Image
                            key={character}
                            src={`/assets/images/${character}Gif.gif`}
                            alt={`${character}Gif`}
                            width={60}
                            height={60}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}