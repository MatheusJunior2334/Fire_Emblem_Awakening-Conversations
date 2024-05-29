import { Dialogue } from "../../types/characterDialoguesTypes";

// Declaração para facilitar o caminho dos áudios
let chromAudios = '/assets/audios/Chrom/Chrom_Voice_';
let lucinaAudios = '/assets/audios/Lucina/Lucina_Voice_';
let gaiusAudios = '/assets/audios/Gaius/Gaius_Voice_';
let tharjaAudios = '/assets/audios/Tharja/Tharja_Voice_';


// Marcação das falas de Chrom e Lucina
export const ChromLucina: Dialogue[] = [
    { character: 'Lucina', text: 'prompt1', emotion: 'Normal', audio: `${lucinaAudios}1.wav` },
    { character: 'Chrom', text: 'prompt2', emotion: 'Normal', audio: `${chromAudios}1.wav` },
    { character: 'Chrom', text: 'prompt3', emotion: 'Normal' },
    { character: 'Lucina', text: 'prompt4', emotion: 'Dor', audio: `${lucinaAudios}2.wav` },
    { character: 'Chrom', text: 'prompt5', emotion: 'Normal', audio: `${chromAudios}2.wav` },
    { character: 'Lucina', text: 'prompt6', emotion: 'Dor', audio: `${lucinaAudios}3.wav` },
    { character: 'Chrom', text: 'prompt7', emotion: 'Normal', audio: `${chromAudios}3.wav` },
    { character: 'Lucina', text: 'prompt8', emotion: 'Dor' },
    { character: 'Chrom', text: 'prompt9', emotion: 'Feliz', audio: `${chromAudios}4.wav` },
    { character: 'Lucina', text: 'prompt10', emotion: 'Feliz', audio: `${lucinaAudios}4.wav` },
    { character: 'Chrom', text: 'prompt11', emotion: 'Feliz', audio: `${chromAudios}5.wav` },
    { character: 'Lucina', text: 'prompt12', emotion: 'Feliz', audio: `${lucinaAudios}5.wav` },

    { character: 'Chrom', text: 'prompt13', emotion: 'Determinado', audio: `${chromAudios}6.wav` },
    { character: 'Lucina', text: 'prompt14', emotion: 'Determinado', audio: `${lucinaAudios}6.wav` },
    { character: 'Chrom', text: 'prompt15', emotion: 'Dor', audio: `${chromAudios}7.wav` },
    { character: 'Lucina', text: 'prompt16', emotion: 'Dor', audio: `${lucinaAudios}7.wav` },
    { character: 'Chrom', text: 'prompt17', emotion: 'Normal', audio: `${chromAudios}8.wav` },
    { character: 'Lucina', text: 'prompt18', emotion: 'Normal', audio: `${lucinaAudios}3.wav` },
    { character: 'Lucina', text: 'prompt19', emotion: 'Normal' },
    { character: 'Lucina', text: 'prompt20', emotion: 'Normal' },
    { character: 'Lucina', text: 'prompt21', emotion: 'Normal' },
    { character: 'Chrom', text: 'prompt22', emotion: 'Dor', audio: `${chromAudios}9.wav` },
    { character: 'Chrom', text: 'prompt23', emotion: 'Dor' },
    { character: 'Lucina', text: 'prompt24', emotion: 'Feliz', audio: `${lucinaAudios}8.wav` },
    { character: 'Chrom', text: 'prompt25', emotion: 'Feliz', audio: `${chromAudios}4.wav` }
]

// Marcação das falas de Chrom e Gaius
export const ChromGaius: Dialogue[] = [
    { character: 'Chrom', text: 'prompt1', emotion: 'Normal' },
    { character: 'Gaius', text: 'prompt2', emotion: 'Normal' },
    { character: 'Chrom', text: 'prompt3', emotion: 'Normal' },
    { character: 'Chrom', text: 'prompt4', emotion: 'Normal' },
    { character: 'Gaius', text: 'prompt5', emotion: 'Normal' },
    { character: 'Chrom', text: 'prompt6', emotion: 'Feliz' },
    { character: 'Chrom', text: 'prompt7', emotion: 'Feliz' },
    { character: 'Chrom', text: 'prompt8', emotion: 'Feliz' },
    { character: 'Chrom', text: 'prompt9', emotion: 'Feliz' },
    { character: 'Gaius', text: 'prompt10', emotion: 'Raiva' },
    { character: 'Gaius', text: 'prompt11', emotion: 'Raiva' },
    { character: 'Gaius', text: 'prompt12', emotion: 'Raiva' },
    { character: 'Chrom', text: 'prompt13', emotion: 'Dor' },
    { character: 'Gaius', text: 'prompt14', emotion: 'Normal' },
    { character: 'Chrom', text: 'prompt15', emotion: 'Normal' },
    { character: 'Chrom', text: 'prompt16', emotion: 'Normal' },
    { character: 'Gaius', text: 'prompt17', emotion: 'Determinado' },
    { character: 'Chrom', text: 'prompt18', emotion: 'Raiva' },
    { character: 'Chrom', text: 'prompt19', emotion: 'Raiva' },
    { character: 'Gaius', text: 'prompt20', emotion: 'Normal' }
]

// Marcação das falas de Gaius e Cordelia
export const GaiusCordelia: Dialogue[] = [
    { character: 'Cordelia', text: 'prompt1', emotion: 'Normal' },
    { character: 'Gaius', text: 'prompt2', emotion: 'Raiva' },
    { character: 'Cordelia', text: 'prompt3', emotion: 'Dor' },
    { character: 'Gaius', text: 'prompt4', emotion: 'Determinado' },
    { character: 'Gaius', text: 'prompt5', emotion: 'Determinado' },
    { character: 'Cordelia', text: 'prompt6', emotion: 'Raiva' },
    { character: 'Cordelia', text: 'prompt7', emotion: 'Raiva' },
    { character: 'Cordelia', text: 'prompt8', emotion: 'Raiva' },
    { character: 'Gaius', text: 'prompt9', emotion: 'Normal' },
    { character: 'Cordelia', text: 'prompt10', emotion: 'Dor' },
    { character: 'Cordelia', text: 'prompt11', emotion: 'Dor' },
    { character: 'Cordelia', text: 'prompt12', emotion: 'Dor' },
    { character: 'Gaius', text: 'prompt13', emotion: 'Dor' },
    { character: 'Gaius', text: 'prompt14', emotion: 'Dor' },
    { character: 'Cordelia', text: 'prompt15', emotion: 'Raiva' },
    { character: 'Gaius', text: 'prompt16', emotion: 'Dor' },
    { character: 'Cordelia', text: 'prompt17', emotion: 'Normal' },
    { character: 'Cordelia', text: 'prompt18', emotion: 'Normal' },
    { character: 'Gaius', text: 'prompt19', emotion: 'Raiva' },
    { character: 'Cordelia', text: 'prompt20', emotion: 'Normal' },
    { character: 'Cordelia', text: 'prompt21', emotion: 'Dor' },
]

// Marcação das falas de Tharja e Gaius
export const GaiusTharja: Dialogue[] = [
    { character: 'Tharja', text: 'prompt1', emotion: 'Normal', audio: `${tharjaAudios}1.wav` },
    { character: 'Gaius', text: 'prompt2', emotion: 'Normal', audio: `${gaiusAudios}1.wav` },
    { character: 'Tharja', text: 'prompt3', emotion: 'Normal', audio: `${tharjaAudios}2.wav` },
    { character: 'Tharja', text: 'prompt4', emotion: 'Normal' },
    { character: 'Gaius', text: 'prompt5', emotion: 'Normal', audio: `${gaiusAudios}2.wav` },
    { character: 'Tharja', text: 'prompt6', emotion: 'Normal', audio: `${tharjaAudios}3.wav` },
    { character: 'Gaius', text: 'prompt7', emotion: 'Dor', audio: `${gaiusAudios}3.wav` },
    { character: 'Tharja', text: 'prompt8', emotion: 'Determinado', audio: `${tharjaAudios}4.wav` },
    { character: 'Gaius', text: 'prompt9', emotion: 'Dor', audio: `${gaiusAudios}4.wav` },
    { character: 'Gaius', text: 'prompt10', emotion: 'Dor' },
    { character: 'Tharja', text: 'prompt11', emotion: 'Raiva', audio: `${tharjaAudios}5.wav`  },
    { character: 'Gaius', text: 'prompt12', emotion: 'Determinado', audio: `${gaiusAudios}5.wav` },
    { character: 'Tharja', text: 'prompt13', emotion: 'Determinado', audio: `${tharjaAudios}6.wav`  },
    { character: 'Gaius', text: 'prompt14', emotion: 'Determinado', audio: `${gaiusAudios}6.wav` },
    { character: 'Gaius', text: 'prompt15', emotion: 'Determinado' },
    { character: 'Tharja', text: 'prompt16', emotion: 'Normal', audio: `${tharjaAudios}2.wav`  },
    { character: 'Gaius', text: 'prompt17', emotion: 'Determinado', audio: `${gaiusAudios}7.wav` },
]

// Marcação das falas de Henry e Tharja
export const HenryTharja: Dialogue[] = [
    { character: 'Tharja', text: 'prompt1', emotion: 'Normal' },
    { character: 'Henry', text: 'prompt2', emotion: 'Normal' },
    { character: 'Tharja', text: 'prompt3', emotion: 'Normal' },
    { character: 'Tharja', text: 'prompt4', emotion: 'Normal' },
    { character: 'Tharja', text: 'prompt5', emotion: 'Normal' },
    { character: 'Henry', text: 'prompt6', emotion: 'Normal' },
    { character: 'Henry', text: 'prompt7', emotion: 'Normal' },
    { character: 'Tharja', text: 'prompt8', emotion: 'Determinado' },
    { character: 'Henry', text: 'prompt9', emotion: 'Determinado' },
    { character: 'Tharja', text: 'prompt10', emotion: 'Normal' },
    { character: 'Henry', text: 'prompt11', emotion: 'Normal' },
    { character: 'Henry', text: 'prompt12', emotion: 'Normal' },
    { character: 'Tharja', text: 'prompt13', emotion: 'Raiva' },
    { character: 'Tharja', text: 'prompt14', emotion: 'Raiva' },
    { character: 'Tharja', text: 'prompt15', emotion: 'Raiva' },
    { character: 'Henry', text: 'prompt16', emotion: 'Normal' },
    { character: 'Tharja', text: 'prompt17', emotion: 'Dor' },
    { character: 'Henry', text: 'prompt18', emotion: 'Feliz' },
    { character: 'Tharja', text: 'prompt19', emotion: 'Normal' },
    { character: 'Tharja', text: 'prompt20', emotion: 'Normal' },
    { character: 'Henry', text: 'prompt21', emotion: 'Normal' }
]

// Marcação das falas de Lissa e Chrom
export const LissaChrom: Dialogue[] = [
    { character: 'Lissa', text: 'prompt1', emotion: 'Dor' },
    { character: 'Chrom', text: 'prompt2', emotion: 'Normal' },
    { character: 'Lissa', text: 'prompt3', emotion: 'Normal' },
    { character: 'Chrom', text: 'prompt4', emotion: 'Normal' },
    { character: 'Lissa', text: 'prompt5', emotion: 'Dor' },
    { character: 'Chrom', text: 'prompt6', emotion: 'Normal' },
    { character: 'Lissa', text: 'prompt7', emotion: 'Raiva' },
    { character: 'Chrom', text: 'prompt8', emotion: 'Feliz' },
    { character: 'Lissa', text: 'prompt9', emotion: 'Raiva' },
    { character: 'Lissa', text: 'prompt10', emotion: 'Raiva' },
    { character: 'Chrom', text: 'prompt11', emotion: 'Normal' },
    { character: 'Lissa', text: 'prompt12', emotion: 'Dor' },
    { character: 'Chrom', text: 'prompt13', emotion: 'Normal' },
    { character: 'Lissa', text: 'prompt14', emotion: 'Raiva' },
    { character: 'Chrom', text: 'prompt15', emotion: 'Raiva' },
    { character: 'Chrom', text: 'prompt16', emotion: 'Normal' },
    { character: 'Chrom', text: 'prompt17', emotion: 'Normal' },
    { character: 'Lissa', text: 'prompt18', emotion: 'Raiva' },
    { character: 'Lissa', text: 'prompt19', emotion: 'Raiva' },
    { character: 'Lissa', text: 'prompt20', emotion: 'Dor' },
]


// Declaração das emoções disponíveis para cada personagem
export const characterEmotions: { [key: string] : string[] } = {
    Chrom: ['Normal', 'Feliz', 'Determinado', 'Dor', 'Raiva'],
    Cordelia: ['Normal', 'Dor', 'Raiva'],
    Gaius: ['Normal', 'Dor', 'Determinado', 'Raiva'],
    Henry: ['Normal', 'Feliz', 'Determinado'],
    Lissa: ['Normal', 'Raiva', 'Dor'],
    Lucina: ['Normal', 'Feliz', 'Determinado', 'Dor'],
    Tharja: ['Normal', 'Raiva', 'Determinado', 'Dor']
}

export const getCharacterImage = (character: string, emotion: string): string => {
    const validEmotions = characterEmotions[character] || [];
    return validEmotions.includes(emotion) ? `/assets/images/${character}${emotion}.png` : `/assets/images/${character}Normal.png`
}