import { TranslationsType1, TranslationsType2 } from "../../contexts/languageContext";

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
export const selectCharactersText: TranslationsType2 = {
    pt: {
        text1: 'Selecionar personagens',
        text2: 'Selecione dois (2) personagens'
    },
    en: {
        text1: 'Select characters',
        text2: 'Select two (2) characters'
    },
    de: {
        text1: 'Charakters auswählen',
        text2: 'Wählen Sie zwei (2) Zeichen aus'
    }
}

export const errorOnlyTwoCharacters: TranslationsType2 = {
    pt: {
        text1: 'Você só pode escolher dois (2) personagens',
        text2: 'Tente desmarcar os personagens que você não deseja iniciar um diálogo'
    },
    en: {
        text1: 'You can only choose two (2) characters',
        text2: 'Try unchecking the characters you do not want to start a dialogue with'
    },
    de: {
        text1: 'Sie können nur zwei (2) Zeichen auswählen',
        text2: 'Versuchen Sie, die Zeichen zu deaktivieren, mit denen Sie keinen Dialog beginnen möchten' 
    }
}

export const errorSelectTwoCharacters: TranslationsType2 = {
    pt: {
        text1: 'Não é possível iniciar um diálogo sem selecionar dois (2) personagens',
        text2: 'Tente selecionar dois (2) personagens'
    },
    en: {
        text1: 'You cannot start a dialogue without selecting two (2) characters',
        text2: 'Try selecting two (2) characters'
    },
    de: {
        text1: 'Sie können keinen Dialog beginnen, ohne zwei (2) Charaktere auszuwählen',
        text2: 'Versuchen Sie, zwei (2) Zeichen auszuwählen'
    }
}

export const errorCharactersCombination: TranslationsType2 = {
    pt: {
        text1: 'Não é possível iniciar um diálogo com esses personagens',
        text2: 'Tente selecionar outra dupla de personagens'
    },
    en: {
        text1: 'It is not possible to start a dialogue with these characters',
        text2: 'Try selecting another pair of characters'
    },
    de:{
        text1: 'Es ist nicht möglich, einen Dialog mit diesen Figuren zu beginnen',
        text2: 'Versuchen Sie, ein anderes Zeichenpaar auszuwählen'
    }
}

export const warningMessageTitle: TranslationsType1 = {
    pt: 'Aviso',
    en: 'Warning',
    de: 'Warnung'
}

export const tipMessageTitle: TranslationsType1 = {
    pt: 'Dica:',
    en: 'Tip:',
    de: 'Tipp:'
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