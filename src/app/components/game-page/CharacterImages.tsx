import React, { useState, useEffect } from "react";
import Image from "next/image";

import styles from './gamePage.module.scss';
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

    const getImageSize = () => {
        let size = 450;

        if (typeof window !== 'undefined') {
            const width = window.innerWidth;

            if (width >= 1280) {
                size = 500;
            } else if (width <= 768) {
                size = 200;
            } else if (width <= 480) {
                size = 100;
            }
        }

        return size;
    }

    return (
        <div className={styles.characters}>
            {characters.map((character, index) => (
                <div key={index} className={styles.characterImageContainer}>
                    <Image
                        src={lastCharacterImages[character] || `/assets/images/${character}Normal.png`}
                        alt={dialogues[index].character}
                        width={getImageSize()}
                        height={getImageSize()}
                        priority
                        className={character === dialogues[dialogIndex].character ? styles.speaking : styles.notSpeaking}
                    />
                </div>
            ))} 
        </div>
    )
}