import { Dialogue } from "../components/dialogues/characterDialogues";

import { ChromLucina } from "../components/dialogues/characterDialogues";
import { ChromLucinaDialogues } from "../components/dialogues/chromLucinaDialogues";

export const getLocalizedText = (textKey: string, lang: string): string => {
    return ChromLucinaDialogues[lang][textKey] || textKey;
}

export const getDialoguesByCharacters = (characters: string[], lang: string): Dialogue[] => {
    const sortedCharacters = characters.sort();
    switch (sortedCharacters.join()) {
        case 'Chrom,Lucina':
            return ChromLucina.map((dialogue) => ({
                ...dialogue,
                text: getLocalizedText(dialogue.text, lang)
            }));
     

        default:
            return[];
    }
}