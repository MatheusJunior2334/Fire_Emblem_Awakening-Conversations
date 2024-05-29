import React, { useState, useEffect } from "react";
import Image from "next/image";

import styles from '../../styles/charactersConversation.module.scss';
import { Dialogue } from "@/app/types/characterDialoguesTypes";
import { getCharacterImage } from "../../data/dialogues/characterDialogues";
import useWindowSize from "@/app/hooks/useWindowSize";

interface CharacterImageProps {
    characters: string[];
    dialogues: Dialogue[];
    dialogIndex: number;
}

export const CharacterImage: React.FC<CharacterImageProps> = ({ characters, dialogues, dialogIndex }) => {
    const { width } = useWindowSize();

    const [lastCharacterImage, setLastCharacterImage] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        if (characters.includes(dialogues[dialogIndex].character)) {
            setLastCharacterImage((prevState) => ({
                ...prevState,
                [dialogues[dialogIndex].character]: getCharacterImage(dialogues[dialogIndex].character, dialogues[dialogIndex].emotion)
            }))
        }
    }, [characters, dialogues, dialogIndex])

    const getImageSize = () => {
        let size = 450;

        if (width >= 1280) {
            size = 500;
        } else if (width <= 768) {
            size = 200;
        } else if (width <= 480) {
            size = 100;
        }

        return size;
    }

    // Ocultar a imagem da Chrom relacionada ao diálogo entre ele e a Lissa (lissaChromDialogues) nas linhas de diálogo 1, 18, 19 e 20
    const isChromHidden = characters.includes('Chrom') && characters.includes('Lissa') && (dialogIndex === 0 || (dialogIndex >= 17 && dialogIndex < dialogues.length));
    const isGaiusHidden = characters.includes('Cordelia') && characters.includes('Gaius') && ((dialogIndex >= 20 && dialogIndex < dialogues.length))
 
    return (
        <div className={styles.characters}>
            {characters.map((character, index) => (
                <div key={index} className={styles.characterImageContainer}>
                    <Image
                        src={lastCharacterImage[character] || `/assets/images/${character}Normal.png`}
                        alt={dialogues[index].character}
                        width={getImageSize()}
                        height={getImageSize()}
                        priority
                        className={character === dialogues[dialogIndex].character ? styles.speaking : styles.notSpeaking}
                        style={{
                            opacity: (isChromHidden && character === 'Chrom') || (isGaiusHidden && character === 'Gaius') ? '0' : '1',
                        }}
                    />
                </div>
            ))} 
        </div>
    )
}