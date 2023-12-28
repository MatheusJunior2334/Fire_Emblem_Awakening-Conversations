import React from "react";
import Image from "next/image";
import styles from './SoundtrackConfirmation.module.scss';

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

export const SoundtrackConfirmation: React.FC<SoundtrackProps> = ({ backgroundMusic, isBackgroundMusic, audioPlayer, isAudioPlayer, confirmChoices, selectedCharacters }) => {

    return (
        <div id={styles.soundtrackConfirmation}>
            <div className={styles.soundtrackContent}>

                <h2>Permissions</h2>

                {/* Botões para permitir áudio das vozes dos personagens e canção de fundo */}
                <div className={styles.buttons}>
                    <button className={isAudioPlayer ? styles.allow : styles.donotAllow} onClick={audioPlayer}>
                        {isAudioPlayer ? <AudioOnIcon /> : <AudioOffIcon />}
                        Character voices
                    </button>

                    <button className={isBackgroundMusic ? styles.allow : styles.donotAllow} onClick={backgroundMusic}>
                        {isBackgroundMusic ? <MusicOnIcon /> : <MusicOffIcon />}
                        Background music
                    </button>
                </div>
                
                <button className={styles.confirmButton} onClick={confirmChoices}>
                    Confirm choices
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