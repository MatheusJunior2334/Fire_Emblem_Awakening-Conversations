'use client'

import React, { useState } from "react";
import { DialogueBox } from "./DialogueBox";
import { CharacterImages } from "./CharacterImages";

import { getDialoguesByCharacters } from "../../utils/dialogueUtils";

import style from './gamePage.module.scss';

import { AudioPlayer } from "../dialogues/AudioPlayer";
import { BackgroundMusic } from "./BackgroundMusic";

interface GamePageProps {
    characters: string[];
    language: string;
}

export const GamePage: React.FC<GamePageProps> = ({ characters, language }) => {
    const [dialogIndex, setDialogIndex] = useState<number>(0);

    const dialogues = getDialoguesByCharacters(characters, language);

    const handleNextDialog = () => {
        if (dialogIndex < dialogues.length - 1) {
            setDialogIndex(dialogIndex + 1);
        }
    }

    const handlePreviousDialog = () => {
        if (dialogIndex < dialogues.length -1) {
            setDialogIndex(dialogIndex - 1);
        }
    }

    return (
        <section id={style.gamePage}>
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
            <AudioPlayer audioSrc={dialogues[dialogIndex].audio || ''} />
            <BackgroundMusic musicSrc='/assets/music/TheShepherdsGarrison.mp3' />

            {dialogIndex > 0 && <button onClick={handlePreviousDialog} className={style.previousButton}>Previous</button>}

            <button onClick={handleNextDialog} className={style.nextButton}>Next</button>           
        </section>
    )
}