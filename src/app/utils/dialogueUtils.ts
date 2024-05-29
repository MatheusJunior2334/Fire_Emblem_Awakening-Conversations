import { Dialogue } from "../types/characterDialoguesTypes";

import { ChromLucina } from "../data/dialogues/characterDialogues";
import { ChromLucinaDialogues } from "../data/dialogues/chromLucinaDialogues";

import { ChromGaius } from "../data/dialogues/characterDialogues";
import { ChromGaiusDialogues } from "../data/dialogues/chromGaiusDialogues";

import { GaiusCordelia } from "../data/dialogues/characterDialogues";
import { GaiusCordeliaDialogues } from "../data/dialogues/gaiusCordeliaDialogues";

import { GaiusTharja } from "../data/dialogues/characterDialogues";
import { GaiusTharjaDialogues } from "../data/dialogues/gaiusTharjaDialogues";

import { HenryTharja } from "../data/dialogues/characterDialogues";
import { HenryTharjaDialogues } from "../data/dialogues/henryTharjaDialogues";

import { LissaChrom } from "../data/dialogues/characterDialogues";
import { LissaChromDialogues } from "../data/dialogues/lissaChromDialogues";

export const getLocalizedText = (textKey: string, lang: string, characters: string[]): string => {
    const sortedCharacters = characters.sort();
    const characterKey = sortedCharacters.join();

    switch (characterKey) {
        case 'Chrom,Lucina':
            return ChromLucinaDialogues[lang][textKey] || textKey; 

        case 'Chrom,Gaius':
            return ChromGaiusDialogues[lang][textKey] || textKey;

        case 'Cordelia,Gaius':
            return GaiusCordeliaDialogues[lang][textKey] || textKey;

        case 'Gaius,Tharja':
            return GaiusTharjaDialogues[lang][textKey] || textKey;

        case 'Henry,Tharja':
            return HenryTharjaDialogues[lang][textKey] || textKey;

        case 'Chrom,Lissa':
            return LissaChromDialogues[lang][textKey] || textKey;

        default:
            return textKey;
    }
}

export const getDialoguesByCharacters = (characters: string[], lang: string): Dialogue[] => {
    const sortedCharacters = characters.slice().sort();
    const characterKey = sortedCharacters.join();

    const shouldReverse = (characterKey === 'Chrom,Lissa' || characterKey === 'Cordelia,Gaius');

    const finalCharacters = shouldReverse ? sortedCharacters.reverse() : sortedCharacters;

    switch (characterKey) {
        case 'Chrom,Lucina':
            return ChromLucina.map((dialogue) => ({
                ...dialogue,
                text: getLocalizedText(dialogue.text, lang, finalCharacters)
            }))

        case 'Chrom,Gaius':
            return ChromGaius.map((dialogue) => ({
                ...dialogue,
                text: getLocalizedText(dialogue.text, lang, finalCharacters)
            }))

        case 'Cordelia,Gaius':
            return GaiusCordelia.map((dialogue) => ({
                ...dialogue,
                text: getLocalizedText(dialogue.text, lang, finalCharacters)
            }))

        case 'Gaius,Tharja':
            return GaiusTharja.map((dialogue) => ({
                ...dialogue,
                text: getLocalizedText(dialogue.text, lang, finalCharacters)
            }))

        case 'Henry,Tharja':
            return HenryTharja.map((dialogue) => ({
                ...dialogue,
                text: getLocalizedText(dialogue.text, lang, finalCharacters)
            }))

        case 'Chrom,Lissa':
            return LissaChrom.map((dialogue) => ({
                ...dialogue,
                text: getLocalizedText(dialogue.text, lang, finalCharacters)
            }))

        default:
            return[];
    }
}