import React, { useState, useEffect } from "react";
import Image from "next/image";

import style from './gamePage.module.scss';
import { Dialogue, getCharacterImage } from "../dialogues/characterDialogues";

interface CharacterImagesProps {
    characters: string[];
    dialogues: Dialogue[];
    dialogIndex: number;
}

export const CharacterImages: React.FC<CharacterImagesProps> = ({ characters, dialogues, dialogIndex }) => {
    const [lastCharacterImages, setLastCharacterImages] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        if (characters.includes(dialogues[dialogIndex].character)) {
            setLastCharacterImages((prevState) => ({
                ...prevState,
                [dialogues[dialogIndex].character]: getCharacterImage(dialogues[dialogIndex].character, dialogues[dialogIndex].emotion)
            }))
        }
    }, [characters, dialogues, dialogIndex])

    return (
        <div className={style.characters}>
            {characters.map((character, index) => (
                <div key={index} className={style.characterImageContainer}>
                    <Image
                        src={lastCharacterImages[character] || `/assets/images/${character}Normal.png`}
                        alt={dialogues[index].character}
                        width={800}
                        height={800}
                        priority
                        className={character === dialogues[dialogIndex].character ? style.speaking : style.notSpeaking}
                    />
                </div>
            ))} 
        </div>
    )
}