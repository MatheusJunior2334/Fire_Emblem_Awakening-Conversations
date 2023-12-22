import React from "react";

import style from './gamePage.module.scss';

import Image from "next/image";

interface DialogueBoxProps {
    character: string;
    text: string;
    isLeftCharacter: boolean;
}

export const DialogueBox: React.FC<DialogueBoxProps> = ({ character, text, isLeftCharacter }) => (
    <div className={`${style.dialogBox} ${isLeftCharacter ? style.leftCharacter : style.rightCharacter}`}>
        <div className={`${style.characterName} ${isLeftCharacter ? style.leftCharacter2 : style.rightCharacter2}`}>
            <Image
                src="/assets/images/CharacterBox.png"
                alt="Character box"
                width={500}
                height={250}
                priority
            />
            <h3>{character}</h3>
        </div>

        <div className={style.characterText}>
            <Image
                src="/assets/images/DialogueBox.png"
                alt="Dialogue box"
                width={500}
                height={250}
                priority    
            />
            <p>{text}</p>
        </div>
    </div>
)