'use client'

import React, { useEffect, useState } from "react";
import { DialogueBox } from "./DialogueBox";
import { CharacterImages } from "./CharacterImages";

import { getDialoguesByCharacters } from "../../utils/dialogueUtils";

import styles from './gamePage.module.scss';

import { AudioPlayer } from "../dialogues/AudioPlayer";
import { BackgroundMusic } from "./BackgroundMusic";
import { EndDialogueComponent } from "../end-dialogue-component/EndDialogueComponent";

interface GamePageProps {
    characters: string[];
    language: string;
    enableBackgroundMusic: boolean;
    enableAudioPlayer: boolean;
    onRestartGame: () => void;
}

export const GamePage: React.FC<GamePageProps> = ({ characters, language, enableBackgroundMusic, enableAudioPlayer, onRestartGame }) => {
    const [dialogIndex, setDialogIndex] = useState<number>(0);
    const [currentMusicSrc, setCurrentMusicSrc] = useState<string | null>(null);
    const [showEndDialogue, setShowEndDialogue] = useState<boolean>(false);

    const dialogues = getDialoguesByCharacters(characters, language);

    // Efeito para aplicar a trilha sonora adjacente a escolha de personagens
    useEffect(() => {
        const selectedCharactersKey = characters.sort().join();
        switch (selectedCharactersKey) {
            case 'Chrom,Lucina':
                setCurrentMusicSrc('/assets/music/TheShepherdsGarrison.mp3');
                break;

            case 'Chrom,Gaius':
                setCurrentMusicSrc('/assets/music/SuchBondsAreTheTrueStrenghtsOfThisArmy.mp3');
                break;

            case 'Gaius,Tharja':
                setCurrentMusicSrc('/assets/music/ButFrederickItsNearlyDark.mp3');
                break;

            default:
                setCurrentMusicSrc(null);
                break;
        }
    }, [characters])

    // Adicionar efeito na troca de imagens de personagens durante o diálogo


    // Funções para realizar a mudança de diálogos
    const handleNextDialog = () => {
        if (dialogIndex < dialogues.length - 1) {
            setDialogIndex(dialogIndex + 1);
        } else {
            setShowEndDialogue(true);
        }
    }

    const handlePreviousDialog = () => {
        if (dialogIndex < dialogues.length -1) {
            setDialogIndex(dialogIndex - 1);
        }
    }

    const handleReturnToCharactersSelection = () => {
        setDialogIndex(0);
        setShowEndDialogue(false);
        onRestartGame();
    }

    return (
        <section id={styles.gamePage} style={{ background: !showEndDialogue ? "url('/assets/images/Conversations-background.jpg') center / cover" : "url('/assets/images/backgroundawakening2.png') top / cover" }}>
            {showEndDialogue ? (
                <EndDialogueComponent onRestartGame={handleReturnToCharactersSelection} />
            ) : (
                <>
                    <CharacterImages 
                        characters={characters}
                        dialogues={dialogues}
                        dialogIndex={dialogIndex}
                    /> 
                    <DialogueBox
                        character={dialogues[dialogIndex].character}
                        text={dialogues[dialogIndex].text}
                        isLeftCharacter={characters.indexOf(dialogues[dialogIndex].character) === 0}
                    /> 
                    {enableAudioPlayer && <AudioPlayer audioSrc={dialogues[dialogIndex].audio || ''} />}
                    {enableBackgroundMusic && <BackgroundMusic musicSrc={currentMusicSrc} />}

                    {dialogIndex > 0 && <button onClick={handlePreviousDialog} className={styles.previousButton}>Previous</button>}

                    <button onClick={handleNextDialog} className={styles.nextButton}>Next</button>  
                </>
            )}         
        </section>
    )
}