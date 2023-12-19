import React from "react";

import style from './gamePage.module.scss';

interface DialogueBoxProps {
    character: string;
    text: string;
    isLeftCharacter: boolean;
}

export const DialogueBox: React.FC<DialogueBoxProps> = ({ character, text, isLeftCharacter }) => (
    <div className={`${style.dialogBox} ${isLeftCharacter ? style.leftCharacter : style.rightCharacter}`}>
        <div className={style.characterName}>
            <h3>{character}</h3>
        </div>

        <div className={style.characterText}>
            <p>{text}</p>
        </div>
    </div>
)