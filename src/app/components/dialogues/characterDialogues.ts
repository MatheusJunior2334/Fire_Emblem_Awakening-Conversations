// Tipos dos atributos utilizados para classificar a fala, emoção e o próprio personagem
export interface Dialogue {
    character: string,
    text: string,
    emotion: string;
    audio?: string;
}

export interface Translations {
    [key: string]: {
        [key: string]: string;
    };
}

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
    { character: 'Lucina', text: 'prompt14', emotion: 'Determinada', audio: `${lucinaAudios}6.wav` },
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
    { character: 'Gaius', text: 'prompt2', emotion: '' },
    { character: 'Chrom', text: 'prompt3', emotion: '' },
    { character: 'Chrom', text: 'prompt4', emotion: '' },
    { character: 'Gaius', text: 'prompt5', emotion: '' },
    { character: 'Chrom', text: 'prompt6', emotion: '' },
    { character: 'Chrom', text: 'prompt7', emotion: '' },
    { character: 'Chrom', text: 'prompt8', emotion: '' },
    { character: 'Chrom', text: 'prompt9', emotion: '' },
    { character: 'Gaius', text: 'prompt10', emotion: '' },
    { character: 'Gaius', text: 'prompt11', emotion: '' },
    { character: 'Gaius', text: 'prompt12', emotion: '' },
    { character: 'Chrom', text: 'prompt13', emotion: '' },
    { character: 'Gaius', text: 'prompt14', emotion: '' },
    { character: 'Chrom', text: 'prompt15', emotion: '' },
    { character: 'Chrom', text: 'prompt16', emotion: '' },
    { character: 'Gaius', text: 'prompt17', emotion: '' },
    { character: 'Chrom', text: 'prompt18', emotion: '' },
    { character: 'Chrom', text: 'prompt19', emotion: '' },
    { character: 'Gaius', text: 'prompt20', emotion: '' }
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
    { character: 'Tharja', text: 'prompt8', emotion: 'Determinada', audio: `${tharjaAudios}4.wav` },
    { character: 'Gaius', text: 'prompt9', emotion: 'Dor', audio: `${gaiusAudios}4.wav` },
    { character: 'Gaius', text: 'prompt10', emotion: 'Dor' },
    { character: 'Tharja', text: 'prompt11', emotion: 'Raiva', audio: `${tharjaAudios}5.wav`  },
    { character: 'Gaius', text: 'prompt12', emotion: 'Determinado', audio: `${gaiusAudios}5.wav` },
    { character: 'Tharja', text: 'prompt13', emotion: 'Determinada', audio: `${tharjaAudios}6.wav`  },
    { character: 'Gaius', text: 'prompt14', emotion: 'Determinado', audio: `${gaiusAudios}6.wav` },
    { character: 'Gaius', text: 'prompt15', emotion: 'Determinado' },
    { character: 'Tharja', text: 'prompt16', emotion: 'Normal', audio: `${tharjaAudios}2.wav`  },
    { character: 'Gaius', text: 'prompt17', emotion: 'Determinado', audio: `${gaiusAudios}7.wav` },
]



// Declaração das emoções disponíveis para cada personagem
export const characterEmotions: { [key: string] : string[] } = {
    Chrom: ['Normal', 'Feliz', 'Determinado', 'Dor'],
    Gaius: ['Normal', 'Dor', 'Determinado'],
    Lucina: ['Normal', 'Feliz', 'Determinada', 'Dor'],
    Tharja: ['Normal', 'Raiva', 'Determinada']
}

export const getCharacterImage = (character: string, emotion: string): string => {
    const validEmotions = characterEmotions[character] || [];
    return validEmotions.includes(emotion) ? `/assets/images/${character}${emotion}.png` : `/assets/images/${character}Normal.png`
}