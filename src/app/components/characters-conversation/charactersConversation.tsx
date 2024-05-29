import React, { useCallback, useEffect, useState } from "react";
import { DialogueBox } from "./dialogueBox";
import { CharacterImage } from "./characterImage";

import { getDialoguesByCharacters } from "../../utils/dialogueUtils";

import styles from '../../styles/charactersConversation.module.scss';

import { CharacterAudioPlayer } from "./characterAudioPlayer";
import { BackgroundMusic } from "./backgroundMusic";
import { EndDialogueComponent } from "../end-dialogue-component/endDialogue";
import { selectCharactersText } from "../../data/translations/charactersSelection";
import { FogBackground } from "../fog-background/fogBackground";

interface CharactersConversationProps {
    characters: string[];
    language: string;
    enableBackgroundMusic: boolean;
    enableAudioPlayer: boolean;
    onRestartGame: () => void;
}

export const CharactersConversation: React.FC<CharactersConversationProps> = ({ characters, language, enableBackgroundMusic, enableAudioPlayer, onRestartGame }) => {
    const [dialogIndex, setDialogIndex] = useState<number>(0);
    const [currentMusicSrc, setCurrentMusicSrc] = useState<string | null>(null);
    const [showEndDialogue, setShowEndDialogue] = useState<boolean>(false);
    const [showAudioPlayer, setShowAudioPlayer] = useState<boolean>(false);

    const dialogues = getDialoguesByCharacters(characters, language);

    // Efeito para aplicar a trilha sonora adjacente a escolha de personagens
    useEffect(() => {
        const sortedCharacters = characters.sort()
        const selectedCharactersKey = sortedCharacters.join();

        if (
            characters.includes('Chrom') && characters.includes('Lissa') ||
            characters.includes('Cordelia') && characters.includes('Gaius')
        ) {
            sortedCharacters.reverse()
        }

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

            case 'Chrom,Lissa':
                setCurrentMusicSrc('/assets/music/EasyNowGirl.mp3');
                break;

            default:
                setCurrentMusicSrc(null);
                break;
        }
    }, [characters])

    // Adicionar efeito na troca de imagens de personagens durante o diálogo
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAudioPlayer(true);
        }, 2000);
        
        return () => clearTimeout(timer)
    }, [])

    // Funções para realizar a mudança de diálogos
    const handleNextDialog = useCallback(() => {
        if (dialogIndex < dialogues.length - 1) {
            setDialogIndex(dialogIndex + 1);
        } else {
            setShowEndDialogue(true);
        }
    }, [dialogIndex, dialogues.length])

    const handlePreviousDialog = () => {
        if (dialogIndex < dialogues.length - 1) {
            setDialogIndex(dialogIndex - 1);
        }
    }

    const handleReturnToCharactersSelection = () => {
        setDialogIndex(0);
        setShowEndDialogue(false);
        onRestartGame();
    }

    useEffect(() => {
        const handleClick = () => {
            handleNextDialog();
        }

        const charactersConversationElement = document.getElementById(styles.charactersConversation);

        if (charactersConversationElement) {
            charactersConversationElement.addEventListener('click', handleClick);
        }

        return () => {
            if (charactersConversationElement) {
                charactersConversationElement.removeEventListener('click', handleClick);
            }
        }
    }, [dialogIndex, handleNextDialog])

    return (
        <section id={styles.charactersConversation} style={{ background: "url('/assets/images/Conversations-background.jpg') center / cover"}}>
            {showEndDialogue ? (
                <EndDialogueComponent onRestartGame={handleReturnToCharactersSelection} />
            ) : (
                <>
                    <FogBackground />
                    <CharacterImage 
                        characters={characters}
                        dialogues={dialogues}
                        dialogIndex={dialogIndex}
                    /> 
                    <DialogueBox
                        character={dialogues[dialogIndex].character}
                        text={dialogues[dialogIndex].text}
                        isLeftCharacter={characters.indexOf(dialogues[dialogIndex].character) === 0}
                    /> 
                    {enableAudioPlayer && showAudioPlayer && <CharacterAudioPlayer audioSrc={dialogues[dialogIndex].audio || ''} />}
                    {enableBackgroundMusic && <BackgroundMusic musicSrc={currentMusicSrc} />}

                    {dialogIndex > 0 && <button onClick={handlePreviousDialog} className={styles.previousButton}>Previous</button>}
                </>
            )}         
        </section>
    )
}