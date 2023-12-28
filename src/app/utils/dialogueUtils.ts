import { Dialogue } from "../components/dialogues/characterDialogues";

import { ChromLucina } from "../components/dialogues/characterDialogues";
import { ChromLucinaDialogues } from "../components/dialogues/chromLucinaDialogues";

import { ChromGaius } from "../components/dialogues/characterDialogues";
import { ChromGaiusDialogues } from "../components/dialogues/chromGaiusDialogues";

import { GaiusTharja } from "../components/dialogues/characterDialogues";
import { GaiusTharjaDialogues } from "../components/dialogues/gaiusTharjaDialogues";

export const getLocalizedText = (textKey: string, lang: string, character: string): string => {
    switch (character) {
        case 'Chrom,Lucina' || 'Lucina,Chrom':
            return ChromLucinaDialogues[lang][textKey] || textKey; 

        case 'Chrom,Gaius' || 'Gaius,Chrom':
            return ChromGaiusDialogues[lang][textKey] || textKey

        case 'Gaius,Tharja' || 'Tharja,Gaius':
            return GaiusTharjaDialogues[lang][textKey] || textKey

        default:
            return textKey;
    }
}

export const getDialoguesByCharacters = (characters: string[], lang: string): Dialogue[] => {
    const sortedCharacters = characters.sort();
    const characterKey = sortedCharacters.join();

    switch (characterKey) {
        case 'Chrom,Lucina':
            return ChromLucina.map((dialogue) => ({
                ...dialogue,
                text: getLocalizedText(dialogue.text, lang, characterKey)
            }));

        case 'Chrom,Gaius':
            return ChromGaius.map((dialogue) => ({
                ...dialogue,
                text: getLocalizedText(dialogue.text, lang, characterKey)
            }))

        case 'Gaius,Tharja':
            return GaiusTharja.map((dialogue) => ({
                ...dialogue,
                text: getLocalizedText(dialogue.text, lang, characterKey)
            }))

        default:
            return[];
    }
}