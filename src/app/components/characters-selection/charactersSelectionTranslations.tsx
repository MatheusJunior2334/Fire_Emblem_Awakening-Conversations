import { TranslationsType1, TranslationsType2 } from "../../contexts/LanguageContext";

// Informações do componente a serem renderizados de acordo com o idioma escolhido

// CharactersCard.tsx
export const characterTextCard: TranslationsType2 = {
    pt: {
        text1: 'Selecionar personagem',
        text2: 'Selecionado'
    },
    en: {
        text1: 'Select character',
        text2: 'Selected'
    },
    de: {
        text1: 'Charakter auswählen',
        text2: 'Ausgewählt'
    }
}


// CharactersSelection.tsx
export const selectCharactersText: TranslationsType1 = {
    pt: 'Selecionar personagens',
    en: 'Select characters',
    de: 'Charakters auswählen'
}

export const selectTwoCharacters: TranslationsType2 = {
    pt: {
        text1: 'Selecione dois (2) personagens',
        text2: 'Você só pode escolher dois (2) personagens'
    },
    en: {
        text1: 'Select two (2) characters',
        text2: 'You can only choose two (2) characters'
    },
    de: {
        text1: 'Wählen Sie zwei (2) Zeichen aus',
        text2: 'Sie können nur zwei (2) Zeichen auswählen' 
    }
}

export const errorCharacterCombination: TranslationsType1 = {
    pt: 'Não é possível iniciar um diálogo com esses personagens',
    en: 'It is not possible to start a dialogue with these characters',
    de: 'Es ist nicht möglich, mit diesen Charakteren einen Dialog zu beginnen'
}

export const startGameText: TranslationsType1 = {
    pt: 'Iniciar diálogo',
    en: 'Start dialogue',
    de: 'Dialog starten'
}

export const backHomeText: TranslationsType1 = {
    pt: 'Voltar para a tela inicial',
    en: 'Return to home screen',
    de: 'Kehren Sie zum Startbildschirm zurück'
}

export const changeDialoguesLanguage: TranslationsType1 = {
    pt: 'pt',
    en: 'en',
    de: 'de'
}

export const loadingText: TranslationsType1 = {
    pt: 'Carregando...',
    en: 'Loading...',
    de: 'Laden...'
}